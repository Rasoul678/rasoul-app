"use client";

import React from "react";

import dynamic from "next/dynamic";

import { iconsList } from "@components/icons";
import { useClickOutside } from "@hooks/useClickOutside";

import MenuContents from "./components/MenuContents";

const MenuDropDown = dynamic(() =>
  import("./MenuDropDown").then((mod) => mod.default)
);

interface IProps {}

export const Menu: React.FC<IProps> = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const clickRef = React.useRef(null);

  useClickOutside({ ref: clickRef, callback: () => setShowMenu(false) });

  return (
    <div>
      <div ref={clickRef} className="block sm:hidden">
        <div onClick={() => setShowMenu((v) => !v)}>
          {iconsList.menu({
            alt: "menu",
            className: "self-baseline",
          })}
        </div>
        {showMenu && <MenuDropDown />}
      </div>
      <div className="hidden sm:flex flex-row-reverse gap-2">
        <MenuContents />
      </div>
    </div>
  );
};
