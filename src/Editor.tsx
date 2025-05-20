import { useEffect, type FC } from "react";
import MonacoEditor, { loader } from "@monaco-editor/react";
import type { languages } from "monaco-editor";
const EVENT_RUN = "RUN_EDITOR";

const CCS_LANG = "ccs";

loader.init().then((monaco) => {
  monaco.languages.register({ id: CCS_LANG });
  monaco.languages.setMonarchTokensProvider(CCS_LANG, CCS_TOKENS_DEFINITIONS);
  monaco.languages.setLanguageConfiguration(CCS_LANG, CCS_LANGUAGE_CONFIG);

  return;
  monaco.editor.defineTheme("light", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "999988", fontStyle: "italic" },
      { token: "string", foreground: "726eef" },
      { token: "string.bracket", foreground: "ffb86c" },
      { token: "number", foreground: "1C5655" },
      { token: "variable", foreground: "36ACAA" },
      { token: "keyword", foreground: "507051" },
      { token: "property", foreground: "247372" },
      { token: "builtin", foreground: "6F42C1" },
      { token: "symbol", foreground: "7BC67E" },
      { token: "punctuation", foreground: "5B7083" },
    ],
    colors: {
      "editor.background": "#FFFFFF",
      "editor.foreground": "#3e3838",
      "editorCursor.foreground": "#3e3838",
      "editor.lineHighlightBackground": "#ebf0f066",
      "editorLineNumber.foreground": "#5B7083",
      "editor.selectionBackground": "#ebf0f099",
    },
  });
});

export type EditorProps = {
  text: string;
  setText: (value: string) => void;
  onSubmit: () => void;
};

export const Editor: FC<EditorProps> = ({ onSubmit, text, setText }) => {
  useEffect(() => {
    window.addEventListener(EVENT_RUN, onSubmit);
    return () => {
      window.removeEventListener(EVENT_RUN, onSubmit);
    };
  }, [onSubmit]);

  return (
    <div className="h-full w-full border border-gray-200 rounded p-1">
      <MonacoEditor
        language={CCS_LANG}
        className="h-full w-full"
        height="100%"
        defaultValue={text}
        onChange={(e) => setText(e ?? "")}
        onMount={(editor, monaco) => {
          editor.addCommand(
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
            () => {
              window.dispatchEvent(new CustomEvent(EVENT_RUN));
            },
          );
        }}
        options={{
          fontSize: 18,
          lineNumbers: "off",
          bracketPairColorization: { enabled: false },
          scrollBeyondLastLine: false,
          overviewRulerBorder: false,
          fontFamily: "Noto sans mono",
          folding: false,
          guides: {
            indentation: false,
          },
          minimap: {
            enabled: false,
          },
          quickSuggestions: false,
        }}
      />
    </div>
  );
};

const CCS_TOKENS_DEFINITIONS: languages.IMonarchLanguage = {
  keywords: ["0"],
  tokenizer: {
    root: [
      // Comments
      [/\/\/[^\n]*/, "comment"],

      [/0/, "keyword"],

      [/[A-Z][A-Za-z0-9_]*/, "variable"],

      // [/[a-z][a-z0-9_]*\?/, "keyword"],
      // [/[a-z][a-z0-9_]*!/, "keyword"],
    ],
  },
};

const CCS_LANGUAGE_CONFIG: languages.LanguageConfiguration = {
  comments: {
    lineComment: "//",
  },
  brackets: [["(", ")"]],
  autoClosingPairs: [{ open: "(", close: ")" }],
  surroundingPairs: [{ open: "(", close: ")" }],
};
