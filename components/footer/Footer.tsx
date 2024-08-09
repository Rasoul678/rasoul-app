import Astronaut from "./Astronaut";
import React from "react";

interface IProps {}

export const Footer: React.FC<IProps> = (props) => {
  return (
    <div className="grid sm:grid-cols-1 grid-cols-2 mt-[6rem]">
      <Astronaut />
      <div>
        <div></div>
      </div>
    </div>
  );
};
