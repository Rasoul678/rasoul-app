"use client";

import React from "react";

import Image from "next/image";

import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons/icons";
import { IntlContext } from "@components/intl-provider";
import { UserContext } from "@components/user-provider";

const { fido, idea } = iconsList;

export const NavLinks = () => {
  const intl = React.useContext(IntlContext);
  const { user } = React.useContext(UserContext);

  return (
    <div className="nav-links">
      <CustomLink href="/">
        {fido({
          alt: intl?.dict.nav.home!,
          className: "self-baseline",
        })}
      </CustomLink>

      {user.authorization.show_articles && (
        <CustomLink href="articles">
          {idea({
            alt: intl?.dict.nav.articles!,
            className: "self-baseline",
          })}
        </CustomLink>
      )}

      {user.authorization.show_live_code && (
        <CustomLink href="live" className="flex">
          <Image
            width="35"
            height="35"
            className="self-baseline"
            alt={intl?.dict.nav.code || "live coding"}
            src="https://img.icons8.com/pulsar-color/100/code.png"
          />
          <span className="relative flex h-[.6rem] w-[.55rem]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-[.6rem] w-[.55rem] bg-teal-400"></span>
          </span>
        </CustomLink>
      )}
    </div>
  );
};
