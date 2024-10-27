"use client";

import React, { useContext } from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";
import { IntlContext } from "@components/intl-provider";
import { UserContext } from "@components/user-provider";
import { myDefault } from "@utils/constants";

type IProps = {};

export const Footer: React.FC<IProps> = (props) => {
  const userContext = useContext(UserContext);
  const intl = useContext(IntlContext);

  const find_me = intl?.dict["find-me"];

  const name = userContext?.user.Person.people[0].name || myDefault.name;
  const email = userContext?.user.EMail.email || myDefault.email;
  const phone = userContext?.user.Telefon.phone_number || myDefault.phone;
  const location = userContext?.user.Location.rich_text || myDefault.location;

  return (
    <div className="footerContainer fade-in-anim" id="contact">
      <div className="footerWrapper">
        <div className="footerInfoWarapper">
          <div className="flex flex-col gap-3 flex-grow justify-end">
            <div className="footerInfoItem">
              {iconsList["user-male"]()}
              <span>{name}</span>
            </div>
            <div className="footerInfoItem">
              {iconsList.mail()}
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="footerInfoItem">
              {iconsList.phone()}
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="footerInfoItem">
              {iconsList["google-maps-old"]()}
              <span>{location}</span>
            </div>
          </div>
        </div>
        <Astronaut
          socials={["github", "linkedin", "telegram", "medium", "youtube"]}
          className="w-[9rem]"
          heading="Find me on social media"
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
