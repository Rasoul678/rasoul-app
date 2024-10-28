import { useEffect, useRef, useState } from "react";

import ResizableBox from "@components/Resizable";

import bundler from "@utils/bundler";

import { editorDefault, showFunc } from "@utils/constants";

import CodeEditor from "../Editor";
import CodeView from "../View";

type ResultType = Awaited<ReturnType<typeof bundler>>;
type IProps = {};

const CodeCell: React.FC<IProps> = () => {
  const isBundling = useRef(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState<ResultType>({
    code: "",
    err: "",
  });

  const bundleCode = async (value: string) => {
    const cumulativeCode = [showFunc, value];
    const result = await bundler(cumulativeCode.join("\n"));
    setResult(result);
  };

  useEffect(() => {
    isBundling.current = true;

    const timer = setTimeout(async () => {
      bundleCode(text);
      isBundling.current = false;
    }, 500);

    return () => {
      isBundling.current = false;
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <>
      <ResizableBox direction="vertical" className="hidden md:block">
        <div className="cellWrapper">
          <ResizableBox direction="horizontal" width={"50%"} maxWidth={"70%"}>
            <CodeEditor defaultValue={editorDefault} onChange={setText} />
          </ResizableBox>
          <CodeView
            code={result.code}
            error={result.err}
            isBundling={isBundling.current}
          />
        </div>
      </ResizableBox>
      <div className="cellWrapper md:hidden">
        <ResizableBox direction="vertical" width="100%" height="50%">
          <CodeEditor defaultValue={editorDefault} onChange={setText} />
        </ResizableBox>
        <CodeView
          code={result.code}
          error={result.err}
          isBundling={isBundling.current}
        />
      </div>
    </>
  );
};

export default CodeCell;
