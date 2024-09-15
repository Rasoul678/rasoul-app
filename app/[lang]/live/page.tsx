import React from "react";

import { Metadata } from "next";

import CodeEditor from "@components/Code";

export const metadata: Metadata = {
  title: "live coding",
};

type IProps = {};

const Codes: React.FC<IProps> = (props) => {
  return <CodeEditor />;
};

export default Codes;
