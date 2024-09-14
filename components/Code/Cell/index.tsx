import { useEffect, useState } from "react";

import ResizableBox from "@components/Resizable";

import bundler from "@utils/bundler";

import { editorDefault, showFunc } from "@utils/constants";

import CodeEditor from "../Editor";
import Preview from "../Preview";
import ProgressBar from "../ProgressBar";

type ResultType = Awaited<ReturnType<typeof bundler>>;
type IProps = {};

const CodeCell: React.FC<IProps> = () => {
  const [isBundling, setIsBundling] = useState(false);
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
    setIsBundling(true);
    const timer = setTimeout(async () => {
      bundleCode(text);
      setIsBundling(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <ResizableBox direction="vertical">
      <div className="cellWrapper">
        <ResizableBox direction="horizontal" width={"50%"} maxWidth={"70%"}>
          <CodeEditor defaultValue={editorDefault} onChange={setText} />
        </ResizableBox>
        {isBundling ? (
          <ProgressBar />
        ) : (
          <Preview code={result.code} err={result.err} />
        )}
      </div>
    </ResizableBox>
  );
};

export default CodeCell;
