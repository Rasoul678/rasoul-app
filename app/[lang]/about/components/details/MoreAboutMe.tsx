import React, { useContext } from "react";

import { UserContext } from "@components/user-provider";

import DescriptionColumn from "./DescriptionColumn";
import UserExcerptColumn from "./ExcerptColumn";

type IProps = {};

const MoreAboutMe: React.FC<IProps> = () => {
  const { user } = useContext(UserContext);

  return (
    <div
      id="about"
      className="container mx-auto my-5 p-3 bg-gray-800 rounded-xl"
    >
      <div className="sm:flex no-wrap md:-mx-2 ">
        {user.authorization.show_resume && <UserExcerptColumn />}
        <DescriptionColumn />
      </div>
    </div>
  );
};

export default MoreAboutMe;
