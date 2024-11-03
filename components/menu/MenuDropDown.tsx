import React from "react";

import { Triangle } from "./components";
import MenuContents from "./components/MenuContents";

interface IProps {}

const MenuDropDown: React.FC<IProps> = () => {
  return (
    <div className="menu-wrapper">
      <Triangle />
      <MenuContents />
    </div>
  );
};

export default MenuDropDown;
