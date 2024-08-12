import React from "react";

import Astronaut from "@components/Astronaut";

interface IProps {}

export const Footer: React.FC<IProps> = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
      <div className="sm:order-last">
        <div>Footer items</div>
      </div>
      <Astronaut />
    </div>
  );
};
