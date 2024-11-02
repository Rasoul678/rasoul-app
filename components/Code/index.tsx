"use client";

import { useContext } from "react";

import { useRouter } from "next/navigation";

import Loader from "@components/loader";
import { UserContext } from "@components/user-provider";
import { useESBuildService } from "@hooks/useBundlerService";

import CodeCell from "./Cell";

type Props = {};

const CodeEditor = ({}: Props) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  //* initialize bundler
  const isReady = useESBuildService();

  if (user.authorization.show_live_code === false) {
    router.push("/");

    return (
      <div className="flex justify-center h-[calc(88dvh)] m-[1rem] mt-[1.5rem]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center h-[calc(88dvh)] m-[1rem] mt-[1.5rem]">
      {isReady ? <CodeCell /> : <Loader />}
    </div>
  );
};

export default CodeEditor;
