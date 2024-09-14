"use client";

import React from "react";

// import { Metadata } from "next";

import CodeCell from "@components/Code/Cell";
import Loader from "@components/loader";
import { useBundlerService } from "@hooks/useBundlerService";

// export const metadata: Metadata = {
//   title: "live coding",
// };

type IProps = {};

const Codes: React.FC<IProps> = (props) => {
  //* initialize bundler
  const isReady = useBundlerService();

  return (
    <div className="flex justify-center m-[2rem]">
      {isReady ? <CodeCell /> : <Loader />}
      {/* <Loader /> */}
    </div>
  );
};

export default Codes;
