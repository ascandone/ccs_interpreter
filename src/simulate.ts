import type { Process, Program, SelectClause } from "./ast";

export class ExecutionError extends Error {}

type ParamsScope = Record<string, string>;
export type Restrictions = Record<string, string>;

export type PendingChoice = {
  resolveProcess(process: Process): void;
  scope: Restrictions;
  clauses: SelectClause[];
};

function genID() {
  const id = Math.floor(Math.random() * 1e7);
  return `SCOPE__${id}`;
}
export class Simulation {
  private readonly procs: Record<string, [string[], Process]>;
  private readonly mainProc: Process;

  private pendingChoices: PendingChoice[] = [];

  private listeners: ((pendingsChoices: PendingChoice[]) => void)[] = [];

  private notifyTimeout: number | undefined;
  private notifyListeners() {
    // Debounced by next tick
    clearTimeout(this.notifyTimeout);
    this.notifyTimeout = setTimeout(() => {
      for (const listener of this.listeners) {
        listener(this.pendingChoices);
      }
    }, 0);
  }
  public onUpdateChoices(
    callback: (pendingsChoices: PendingChoice[]) => void,
  ): VoidFunction {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((c) => c !== callback);
    };
  }

  constructor(readonly program: Program) {
    this.procs = Object.fromEntries(
      program.map(({ name, process, params }) => [name, [params, process]]),
    );

    const mainProc = this.procs.Main;
    if (mainProc === undefined) {
      throw new ExecutionError("Missing Main process");
    }

    if (mainProc[0].length !== 0) {
      throw new ExecutionError("Main cannot have any params");
    }

    this.mainProc = mainProc[1];
  }

  public run(): Promise<void> {
    return this.exec(this.mainProc, {
      path: ["Main"],
      restrictions: {},
      paramsScope: {},
    });
  }

  private lookupChoice(
    clauses: SelectClause[],
    restrictions: Restrictions,
  ): Process | undefined {
    for (const newClause of clauses) {
      for (const pendingChoice of this.pendingChoices) {
        for (const pendingClause of pendingChoice.clauses) {
          const scopedNewClauseEvt =
            restrictions[newClause.evt] ?? newClause.evt;
          const scopedPendingClauseEvt =
            pendingChoice.scope[pendingClause.evt] ?? pendingClause.evt;

          if (
            scopedNewClauseEvt === scopedPendingClauseEvt &&
            ((newClause.type === "send" && pendingClause.type === "receive") ||
              (newClause.type === "receive" && pendingClause.type === "send"))
          ) {
            pendingChoice.resolveProcess(pendingClause.after);
            return newClause.after;
          }
        }
      }
    }

    return undefined;
  }

  private async exec(
    process: Process,
    options: {
      path: string[];
      restrictions: Restrictions;
      paramsScope: ParamsScope;
    },
  ): Promise<void> {
    switch (process.type) {
      case "empty":
        return;

      case "ident": {
        const lookup = this.procs[process.name];
        if (lookup === undefined) {
          throw new ExecutionError(`Invalid process name: ${process.name}`);
        }

        const [params, def] = lookup;
        if (params.length !== process.args.length) {
          throw new ExecutionError(
            `Wrong arity for ${process.name}. Expected ${params.length}, got ${process.args} instead.`,
          );
        }

        if (options.path.includes(process.name)) {
          throw new ExecutionError(
            `Cannot define mutually recursive processes: '${options.path.join(" -> ")} -> ${process.name}'. Try wrapping any of them into a + operator.`,
          );
        }

        const paramsScope: ParamsScope = Object.fromEntries(
          params.map((param, i) => {
            const correspondingArg = process.args[i]!;
            return [
              param,
              options.paramsScope[correspondingArg] ?? correspondingArg,
            ] as const;
          }),
        );

        return this.exec(def, {
          ...options,
          paramsScope,
          path: [...options.path, process.name],
        });
      }

      case "choice": {
        const clauses = process.clauses.map((clause) => ({
          ...clause,
          evt: options.paramsScope[clause.evt] ?? clause.evt,
        }));

        const nextProcess = await new Promise<Process>((resolveProcess) => {
          const lookup = this.lookupChoice(clauses, options.restrictions);

          if (lookup !== undefined) {
            resolveProcess(lookup);
            return;
          }

          const choice: PendingChoice = {
            scope: options.restrictions,
            clauses,
            resolveProcess: (process: Process) => {
              this.pendingChoices = this.pendingChoices.filter(
                (c) => c !== choice,
              );
              this.notifyListeners();
              resolveProcess(process);
            },
          };

          // Else, put in queue and notify listeners
          this.pendingChoices.push(choice);
          this.notifyListeners();
        });

        return this.exec(nextProcess, {
          ...options,
          path: [],
        });
      }

      case "par":
        await Promise.all([
          this.exec(process.left, options),
          this.exec(process.right, options),
        ]);
        return;

      case "restriction": {
        const label = options.paramsScope[process.label] ?? process.label;
        return this.exec(process.process, {
          ...options,
          restrictions: { ...options.restrictions, [label]: genID() },
        });
      }
    }
  }
}
