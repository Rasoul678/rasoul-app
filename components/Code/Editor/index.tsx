import React, {
  memo,
  PropsWithChildren,
  useCallback,
  useId,
  useRef,
} from "react";

import MonacoEditor, { OnMount } from "@monaco-editor/react";
import monaco from "monaco-editor/esm/vs/editor/editor.api";
import {
  getWorker,
  MonacoJsxSyntaxHighlight,
} from "monaco-jsx-syntax-highlight";
import prettier from "prettier";
import parser from "prettier/parser-babel";

import prettierSVG from "@assets/svg/prettier.svg";
import GeneralIcon from "@components/icons/GeneralIcon";

// import Prettier from "../icons/Prettier";

interface IProps extends PropsWithChildren {
  defaultValue: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<IProps> = (props) => {
  const { defaultValue, onChange } = props;
  const id = useId();

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount: OnMount = useCallback(
    (editor, monaco) => {
      editorRef.current = editor;

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        jsx: monaco.languages.typescript.JsxEmit.Preserve,
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        esModuleInterop: true,
        moduleResolution:
          monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      });

      const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(
        getWorker(),
        monaco
      );

      const { highlighter, dispose } =
        monacoJsxSyntaxHighlight.highlighterBuilder({
          editor: editor,
        });

      //* init highlight
      highlighter();

      editor.onDidChangeModelContent(() => {
        //* content change, highlight
        highlighter();

        //* content change, build
        const value = editor.getValue();
        onChange?.(value);
      });

      formatCode(defaultValue);
      return dispose;
    },
    [defaultValue, onChange]
  );

  const formatCode = async (unformatted: string | undefined) => {
    if (!unformatted) return;

    //* format that value
    const formatted = await prettier.format(unformatted, {
      parser: "babel",
      plugins: [parser],
      useTabs: false,
      singleQuote: false,
      semi: true,
    });
    //* Set formatted value back in the editor
    editorRef.current?.setValue(formatted.replace(/\n$/, ""));
  };

  const onClickFormat = () => {
    //* Get current value from editor
    const unformatted = editorRef.current?.getValue();

    formatCode(unformatted);
  };

  return (
    <div className="group editorWrapper">
      <div
        className="formatterButton md:group-hover:opacity-100"
        onClick={onClickFormat}
      >
        <GeneralIcon
          src={prettierSVG}
          className="rounded-full"
          alt="format with prettier"
        />
      </div>
      <MonacoEditor
        className="editor"
        height="100%"
        language="javascript"
        path={`file:///${id}-index.tsx`}
        theme="vs-dark"
        defaultValue={defaultValue}
        onMount={handleEditorDidMount}
        options={{
          wordWrap: "on", //* Make word to  wrap
          minimap: {
            enabled: false, //* Disable minimap
          },
          showUnused: true, //* Don't fade unused statements
          folding: false, //* Collapse left margin of the lines
          lineNumbersMinChars: 3, //* Decrease right side of the line number
          fontSize: 18, //* font size
          scrollBeyondLastLine: true,
          automaticLayout: true, //* Auto adjust for resizing
          tabSize: 2, //* Tab size inside editor
          lineHeight: 30, //* Line height
        }}
      />
    </div>
  );
};

export default memo(CodeEditor);
