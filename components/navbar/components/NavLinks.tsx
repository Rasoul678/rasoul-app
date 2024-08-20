"use client";

import React from "react";

import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons/icons";
import { IntlContext } from "@components/intl-provider";

export const NavLinks = () => {
  const intl = React.useContext(IntlContext);

  return (
    <div className="nav-links">
      <CustomLink href="/">
        {iconsList.home({
          alt: intl?.dict.nav.home!,
          className: "self-baseline",
        })}
      </CustomLink>
      <CustomLink href="articles">
        {iconsList.ideas({
          alt: intl?.dict.nav.articles!,
          className: "self-baseline",
        })}
      </CustomLink>
      <CustomLink href="live">
        {iconsList.stacks.js({
          alt: intl?.dict.nav.code!,
          className: "self-baseline",
          width: 35,
        })}

        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </CustomLink>
    </div>
  );
};
