"use client";

import React, { useContext } from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";
import { IntlContext } from "@components/intl-provider";
import { UserContext } from "@components/user-provider";

type IProps = {};

export const Footer: React.FC<IProps> = () => {
  const { user } = useContext(UserContext);
  const intl = useContext(IntlContext);

  const find_me = intl?.dict["find-me"];

  return (
    <div className="footerContainer fade-in-anim" id="contact">
      <div className="footerWrapper">
        <div className="footerInfoWarapper">
          <div className="flex flex-col gap-3 flex-grow justify-end">
            <div className="footerInfoItem">
              {iconsList["user-male"]()}
              <span>{user?.name}</span>
            </div>
            <div className="footerInfoItem">
              {iconsList.mail()}
              <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </div>
            <div className="footerInfoItem">
              {iconsList.phone()}
              <a href={`tel:${user?.phone}`}>{user?.phone}</a>
            </div>
            <div className="footerInfoItem">
              {iconsList["google-maps-old"]()}
              <span>{user?.location}</span>
            </div>
          </div>
        </div>
        <Astronaut
          socials={["github", "linkedin", "telegram", "medium", "youtube"]}
          className="w-[9rem]"
          heading={find_me}
        />
      </div>
      <div className="footerLinks">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="articles">Articles</CustomLink>
        <CustomLink href="live">Live</CustomLink>
        <CustomLink href="about">About</CustomLink>
      </div>
      <div className="footerMadeWithLove">
        Mit {iconsList["for-you"]({ width: 30, className: "mr-1" })} gemacht
      </div>
    </div>
  );
};
