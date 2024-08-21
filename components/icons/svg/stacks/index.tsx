import Python from "./PythonSVG";
import React from "./ReactSVG";
import Typescript from "./TypescriptSVG";

export const stackSVG = {
  Typescript: <Typescript />,
  React: <React />,
  Python: <Python />,
} as const;

export type StackSVGType = keyof typeof stackSVG;
