import { useEffect, useRef, useState, type FC } from "react";
import { ParsingError, unsafeParse } from "./parser";
import { ExecutionError, Simulation, type PendingChoice } from "./simulate";
import { Editor } from "./Editor";

const EXAMPLE_INPUT = String.raw`Main = (
  // we have two semaphores x and y
  S(sx_up, sx_down) |
  S(sy_up, sy_down) |

  // and a bunch of concurrent procs
  sx_up!.proc1?.sx_down!.0 |
  sy_up!.proc2?.sy_down!.0 |
  sx_up!.proc3?.sx_down!.0 |
  sx_up!.proc4?.sx_down!.0
)\sx_up\sx_down\sy_up\sy_down


// a binary semaphore
// run it with "S(a, b)"
// and emit "a!" to turn it up, "b!" to turn it down
S(up, down) = up?.S_1(up, down)
S_1(up, down) = up?.S_2(up, down) + down?.S(up, down)
S_2(up, down) = down?.S_1(up, down)

`;

const btnStyle =
  "text-white w-32 shadow cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2";

const outlineBtn =
  "text-gray-900 hover:text-white border border-gray-600 shadow-sm hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2";

const Simulator: FC<{ source: string }> = ({ source }) => {
  const [running, setRunning] = useState(false);
  const [pendingChoices, setPendingChoices] = useState<PendingChoice[]>([]);

  const unsubcribeRef = useRef<VoidFunction>(null);

  async function handleRun() {
    try {
      const parsed = unsafeParse(source);
      const simulator = new Simulation(parsed);

      const unsubcribe = simulator.onUpdateChoices((c) => {
        setPendingChoices([...c]);
      });
      unsubcribeRef.current = unsubcribe;

      setRunning(true);
      await simulator.run();

      setPendingChoices([]);
    } catch (error) {
      if (
        !(error instanceof ParsingError) &&
        !(error instanceof ExecutionError)
      ) {
        throw error;
      }

      alert("Parsing error: " + error.message);
    } finally {
      setRunning(false);
      unsubcribeRef.current?.();
    }
  }

  function handleStop() {
    unsubcribeRef.current?.();
    setPendingChoices([]);
    setRunning(false);
  }

  const visibleChoices = pendingChoices
    .map((choice) => ({
      ...choice,
      clauses: choice.clauses.filter(
        (clause) => !(clause.evt in choice.restrictions),
      ),
    }))
    .filter((c) => c.clauses.length !== 0);

  return (
    <div className="w-full">
      {running ? (
        <button
          type="button"
          className={`${btnStyle}  bg-red-700 hover:bg-red-800`}
          onClick={handleStop}
        >
          Stop
        </button>
      ) : (
        <button
          type="button"
          className={`${btnStyle} bg-blue-700 hover:bg-blue-800`}
          onClick={handleRun}
        >
          Run
        </button>
      )}

      <div className="h-2"></div>

      {visibleChoices.length === 0 ? null : (
        <>
          <h4 className="text-base text-gray-700 font-semibold">
            Available actions:
          </h4>
          <ul className="flex flex-col gap-y-2">
            {visibleChoices.map((choice) => (
              <li className="border border-gray-300 rounded w-full p-2">
                <ul className="flex gap-x-2">
                  {choice.clauses.map((clause) => (
                    <li>
                      <button
                        className={outlineBtn}
                        onClick={() => {
                          choice.resolveProcess(clause.after);
                        }}
                      >
                        {clause.type === "receive" ? "send" : "receive"}(
                        {clause.evt})
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

function useSerializedText(initial: string, storageKey: string) {
  const [text, setText] = useState(() => {
    const lookup = localStorage.getItem(storageKey);
    return lookup ?? initial;
  });
  useEffect(() => {
    localStorage.setItem(storageKey, text);
  }, [text, storageKey]);

  return [text, setText] as const;
}

function App() {
  const [text, setText] = useSerializedText(EXAMPLE_INPUT, "input-text");

  return (
    <>
      <div className="flex flex-row gap-x-4 p-4 w-full h-screen">
        <Editor text={text} setText={setText} onSubmit={() => {}} />
        <Simulator source={text} />
      </div>
    </>
  );
}

export default App;
