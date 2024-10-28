"use client";

import Loader from "@components/loader";
import { useESBuildService } from "@hooks/useBundlerService";

import CodeCell from "./Cell";

type Props = {};

const CodeEditor = ({}: Props) => {
  //* initialize bundler
  const isReady = useESBuildService();

  return (
    <div className="flex justify-center h-[calc(88dvh)] m-[1rem] mt-[1.5rem]">
      {isReady ? <CodeCell /> : <Loader />}
    </div>
  );
};

export default CodeEditor;
