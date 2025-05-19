import type { Agent, Program, SelectClause } from "./ast";

export class ExecutionError extends Error {}

type ParamsScope = Record<string, string>;
export type Restrictions = Record<string, string>;

export type PendingChoice = {
  resolveAgent(agent: Agent): void;
  scope: Restrictions;
  clauses: SelectClause[];
};

function genID() {
  const id = Math.floor(Math.random() * 1e7);
  return `SCOPE__${id}`;
}
export class Simulation {
  private readonly agents: Record<string, [string[], Agent]>;
  private readonly mainAgent: Agent;

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
    this.agents = Object.fromEntries(
      program.map(({ name, agent, params }) => [name, [params, agent]]),
    );

    const mainAgent = this.agents.Main;
    if (mainAgent === undefined) {
      throw new ExecutionError("Missing Main agent");
    }

    if (mainAgent[0].length !== 0) {
      throw new ExecutionError("Main cannot have any params");
    }

    this.mainAgent = mainAgent[1];
  }

  public run(): Promise<void> {
    return this.exec(this.mainAgent, {
      path: ["Main"],
      restrictions: {},
      paramsScope: {},
    });
  }

  private lookupChoice(
    clauses: SelectClause[],
    restrictions: Restrictions,
  ): Agent | undefined {
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
            pendingChoice.resolveAgent(pendingClause.after);
            return newClause.after;
          }
        }
      }
    }

    return undefined;
  }

  private async exec(
    agent: Agent,
    options: {
      path: string[];
      restrictions: Restrictions;
      paramsScope: ParamsScope;
    },
  ): Promise<void> {
    switch (agent.type) {
      case "empty":
        return;

      case "ident": {
        const lookup = this.agents[agent.name];
        if (lookup === undefined) {
          throw new ExecutionError(`Invalid agent name: ${agent.name}`);
        }

        const [params, def] = lookup;
        if (params.length !== agent.args.length) {
          throw new ExecutionError(
            `Wrong arity for ${agent.name}. Expected ${params.length}, got ${agent.args} instead.`,
          );
        }

        if (options.path.includes(agent.name)) {
          throw new ExecutionError(
            `Cannot define mutually recursive agents: '${options.path.join(" -> ")} -> ${agent.name}'. Try wrapping any of them into a + operator.`,
          );
        }

        const paramsScope: ParamsScope = Object.fromEntries(
          params.map((param, i) => {
            const correspondingArg = agent.args[i]!;
            return [
              param,
              options.paramsScope[correspondingArg] ?? correspondingArg,
            ] as const;
          }),
        );

        return this.exec(def, {
          ...options,
          paramsScope,
          path: [...options.path, agent.name],
        });
      }

      case "choice": {
        const nextAgent = await new Promise<Agent>((resolveAgent) => {
          const lookup = this.lookupChoice(agent.clauses, options.restrictions);
          if (lookup !== undefined) {
            resolveAgent(lookup);
            return;
          }

          const choice: PendingChoice = {
            scope: options.restrictions,
            resolveAgent: (agent: Agent) => {
              this.pendingChoices = this.pendingChoices.filter(
                (c) => c !== choice,
              );
              this.notifyListeners();
              resolveAgent(agent);
            },
            clauses: agent.clauses.map((clause) => ({
              ...clause,
              evt: options.paramsScope[clause.evt] ?? clause.evt,
            })),
          };

          // Else, put in queue and notify listeners
          this.pendingChoices.push(choice);
          this.notifyListeners();
        });

        return this.exec(nextAgent, {
          ...options,
          path: [],
        });
      }

      case "par":
        await Promise.all([
          this.exec(agent.left, options),
          this.exec(agent.right, options),
        ]);
        return;

      case "restriction": {
        const label = options.paramsScope[agent.label] ?? agent.label;
        return this.exec(agent.agent, {
          ...options,
          restrictions: { ...options.restrictions, [label]: genID() },
        });
      }
    }
  }
}
