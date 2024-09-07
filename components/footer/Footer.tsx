"use client";

import React, { useContext } from "react";

import Link from "next/link";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";
import { UserContext } from "@components/user-provider";

interface IProps {}

export const Footer: React.FC<IProps> = (props) => {
  const userContext = useContext(UserContext);
  return (
    <div className="relative bg-black">
      <div className="footerWrapper">
        <div className="footerInfoWarapper">
          <div className="flex flex-col gap-3 flex-grow justify-center">
            <div className="footerInfoItem">
              {iconsList.user()}
              <span>{userContext?.user.Person.people[0].name}</span>
            </div>
            <div className="footerInfoItem">
              {iconsList.phone()}
              <a href={`tel:${userContext?.user.Telefon.phone_number}`}>
                {userContext?.user.Telefon.phone_number}
              </a>
            </div>
            <div className="footerInfoItem">
              {iconsList.mail()}
              <a href={`mailto:${userContext?.user.EMail.email}`}>
                {userContext?.user.EMail.email}
              </a>
            </div>
            <div className="footerInfoItem">
              {iconsList.googleMapsOld()}
              <Link
                href="https://maps.app.goo.gl/ndSDE2sZNMPXYqHz6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iran
              </Link>
            </div>
          </div>
        </div>
        <Astronaut
          socials={["github", "linkedin", "telegram", "medium", "youtube"]}
          className="w-[9rem]"
          heading="Find me in social media"
        />
      </div>
      <div className="footerLinks">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="articles">Articles</CustomLink>
        <CustomLink href="live">Live</CustomLink>
        <CustomLink href="about">About</CustomLink>
      </div>
      <div className="footerMadeWithLove">
        Mit {iconsList.forYou({ width: 30, className: "mr-1" })} gemacht
      </div>
    </div>
  );
};
