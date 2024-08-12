"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";

import { iconsList } from "@components/icons";
import { useClickOutside } from "@hooks/useClickOutside";
import { clientService } from "@utils/api-service";


const MenuDropDown = dynamic(() =>
  import("./MenuDropDown").then((mod) => mod.default)
);

interface IProps {}

export const Menu: React.FC<IProps> = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const clickRef = React.useRef(null);

  useClickOutside({ ref: clickRef, callback: () => setShowMenu(false) });

  const { data: user } = useQuery({
    queryKey: ["hydrate-notion-user"],
    queryFn: () => clientService.getNotionAuthUser(),
  });

  return (
    <div ref={clickRef}>
      <div onClick={() => setShowMenu((v) => !v)}>
        {iconsList.menu({
          alt: "menu",
          className: "self-baseline",
        })}
      </div>
      {showMenu && <MenuDropDown user={user} />}
    </div>
  );
};
