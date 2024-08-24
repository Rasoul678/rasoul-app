import React, { memo } from "react";

import { iconsList } from "@components/icons";

import TechIcon from "./TechIcon";

type IProps = {
  inView: boolean;
};

const TechListIcons: React.FC<IProps> = ({ inView }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 mt-[5rem] relative left-[0%] mb-[3rem] w-[75%] sm-w-[80%] justify-center">
      {[...Object.entries(iconsList.stacks)].map(([icon, component], index) => {
        return (
          <TechIcon inView={inView} delay={index} key={icon}>
            {component()}
          </TechIcon>
        );
      })}
    </div>
  );
};

export default memo(TechListIcons);
