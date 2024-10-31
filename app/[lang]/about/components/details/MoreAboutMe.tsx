import React from "react";

import DescriptionColumn from "./DescriptionColumn";
import UserExcerptColumn from "./ExcerptColumn";

type IProps = {};

const MoreAboutMe: React.FC<IProps> = () => {
  return (
    <div
      id="about"
      className="container mx-auto my-5 p-3 bg-gray-800 rounded-xl"
    >
      <div className="sm:flex no-wrap md:-mx-2 ">
        <UserExcerptColumn />
        <DescriptionColumn />
      </div>
    </div>
  );
};

export default MoreAboutMe;
