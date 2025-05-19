import { test, expect, vi } from "vitest";
import { ExecutionError, Simulation } from "./simulate";
import { unsafeParse } from "./parser";

function parseSimulation(
  src: string,
  choicesSelector?: Array<{ type: "send" | "receive"; name: string }>,
) {
  const s = new Simulation(unsafeParse(src));

  if (choicesSelector !== undefined) {
    choicesSelector.reverse();
    s.onUpdateChoices((choices) => {
      const selection = choicesSelector.pop();
      if (selection === undefined) {
        return;
      }

      for (const choice of choices) {
        const lookup = choice.clauses.find(
          (clause) =>
            clause.type === selection.type && clause.evt === selection.name,
        );
        if (lookup !== undefined) {
          choice.resolveAgent(lookup.after);
          return;
        }
      }
    });
  }

  return s;
}

test("empty procs terminates", { timeout: 10 }, async () => {
  const onChoice = vi.fn();
  const s = parseSimulation(`Main = 0`);
  s.onUpdateChoices(onChoice);
  await s.run();
  expect(onChoice).not.toHaveBeenCalled();
});

test("emit message", { timeout: 10 }, async () => {
  const s = parseSimulation(`Main = x!.0`, [{ type: "send", name: "x" }]);
  await s.run();
});

test("receive messages", { timeout: 10 }, async () => {
  const s = parseSimulation(`Main = x?.0`, [{ type: "receive", name: "x" }]);
  await s.run();
});

test("throw on recursive def", { timeout: 100 }, async () => {
  const s = parseSimulation(`
    Main = x?.0 | S

    S = y!.0 | Main
  `);

  await expect(s.run()).rejects.toThrow(ExecutionError);
});

test.todo("allow recursive def using +", { timeout: 2000 }, async () => {
  const s = parseSimulation(
    `
    Main = x?.0 | S

    S = y!.0 | z?.Main
  `,
    [
      {
        type: "receive",
        name: "z",
      },
      {
        type: "receive",
        name: "x",
      },
    ],
  );

  await s.run();
});

test("handshake", { timeout: 10 }, async () => {
  const s = parseSimulation(`Main = x!.0 | x?.0`);

  const onUpdateChoices = vi.fn();
  s.onUpdateChoices(onUpdateChoices);

  await s.run();

  expect(onUpdateChoices).not.toHaveBeenCalled();
});

test("receive parametric messages ", { timeout: 200 }, async () => {
  const s = parseSimulation(
    `
      Proc(x) = x?.0
      Main = Proc(evt)
    `,
    [{ type: "receive", name: "evt" }],
  );
  await s.run();
});
