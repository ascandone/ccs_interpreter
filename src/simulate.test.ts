import { test, expect, vi } from "vitest";
import { Simulation } from "./simulate";
import { unsafeParse } from "./parser";

function parseSimulation(src: string) {
  return new Simulation(unsafeParse(src));
}

test("empty procs terminates", { timeout: 10 }, async () => {
  const onChoice = vi.fn();
  const s = parseSimulation(`Main = 0`);
  s.onUpdateChoices(onChoice);
  await s.run();
  expect(onChoice).not.toHaveBeenCalled();
});

test("emit message", { timeout: 10 }, async () => {
  const EVT_NAME = "x";

  const s = parseSimulation(`Main = x!.0`);

  s.onUpdateChoices((newChoices) => {
    if (newChoices.length === 0) {
      return;
    }

    const [{ clauses, resolveAgent }] = newChoices;

    const clause = clauses.find(
      (clause) => clause.type === "send" && clause.evt === EVT_NAME
    );

    expect(clause).not.toBeUndefined();
    resolveAgent(clause!.after);
  });

  await s.run();
});

test("receive messages", { timeout: 10 }, async () => {
  const EVT_NAME = "x";

  const s = parseSimulation(`Main = x?.0`);

  s.onUpdateChoices((newChoices) => {
    if (newChoices.length === 0) {
      return;
    }

    const [{ clauses, resolveAgent }] = newChoices;

    const clause = clauses.find(
      (clause) => clause.type === "receive" && clause.evt === EVT_NAME
    );

    expect(clause).not.toBeUndefined();
    resolveAgent(clause!.after);
  });

  await s.run();
});

test("handshake", { timeout: 10 }, async () => {
  const s = parseSimulation(`Main = x!.0 | x?.0`);

  const onUpdateChoices = vi.fn();
  s.onUpdateChoices(onUpdateChoices);

  await s.run();

  expect(onUpdateChoices).not.toHaveBeenCalled();
});
