import { test, expect, vi } from "vitest";
import { Simulation } from "./simulate";
import { unsafeParse } from "./parser";

function parseSimulation(
  src: string,
  choicesSelector?: Array<{ type: "send" | "receive"; name: string }>
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
            clause.type === selection.type && clause.evt === selection.name
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

test("handshake", { timeout: 10 }, async () => {
  const s = parseSimulation(`Main = x!.0 | x?.0`);

  const onUpdateChoices = vi.fn();
  s.onUpdateChoices(onUpdateChoices);

  await s.run();

  expect(onUpdateChoices).not.toHaveBeenCalled();
});
