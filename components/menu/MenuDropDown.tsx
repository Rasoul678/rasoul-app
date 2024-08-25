import React from "react";

import { PersonUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { Triangle } from "./components";
import MenuContents from "./components/MenuContents";

interface IProps {
  user?: PersonUserObjectResponse;
}

const MenuDropDown: React.FC<IProps> = ({ user }) => {
  return (
    <div className="menu-wrapper">
      <Triangle />
      <MenuContents />
    </div>
  );
};

export default MenuDropDown;
