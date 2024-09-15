import React, { PropsWithChildren } from "react";

import { Resizable } from "re-resizable";

import Handle from "./Handle";

interface IProps extends PropsWithChildren {
  direction: "horizontal" | "vertical";
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  className?: string;
}

const ResizableBox: React.FC<IProps> = (props) => {
  const {
    direction,
    children,
    width = "100%",
    maxWidth = "100%",
    height = "auto",
    className,
  } = props;

  return (
    <Resizable
      defaultSize={{
        width,
        height: height,
      }}
      minWidth="30%"
      maxWidth={maxWidth}
      handleComponent={{
        right: <Handle direction="vertical" />,
        bottom: <Handle direction="horizontal" />,
      }}
      enable={{
        ...(direction === "horizontal" ? { right: true } : { bottom: true }),
      }}
      minHeight="10vh"
      maxHeight="85vh"
      className={className}
    >
      {children}
    </Resizable>
  );
};

export default ResizableBox;
