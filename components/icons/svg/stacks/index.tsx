import Javascript from "./JavascriptSVG";
import Nextjs from "./NextjsSVG";
import Python from "./PythonSVG";
import React from "./ReactSVG";
import Rust from "./RustSVG";
import Typescript from "./TypescriptSVG";

export const stackSVG = {
  Typescript: <Typescript />,
  React: <React />,
  Python: <Python />,
  Javascript: <Javascript />,
  Nextjs: <Nextjs />,
  Rust: <Rust />,
} as const;

export type StackSVGType = keyof typeof stackSVG;
