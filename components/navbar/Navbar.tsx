import React from "react";

import Menu from "@components/menu";

import { NavLinks } from "./components";

type IProps = {};

export const Navbar: React.FC<IProps> = () => {
  return (
    <div className="navbar z-[1000]">
      <NavLinks />
      <div className="flex flex-row-reverse gap-3 justify-center align-middle sm:cursor-default cursor-context-menu">
        <Menu />
      </div>
    </div>
  );
};
