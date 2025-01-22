"use client";

import React, { useContext } from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";
import { IntlContext } from "@components/intl-provider";
import ShinyText from "@components/ShinyText/ShinyText";
import { UserContext } from "@components/user-provider";

const { mail, phone, google_maps_old, user_male, for_you } = iconsList;

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
              {user_male()}
              <ShinyText
                text={user?.name}
                disabled={false}
                speed={3}
                className="footerInfoItem"
              />
            </div>

            {user.authorization.show_email && (
              <div className="footerInfoItem">
                {mail()}
                <a href={`mailto:${user?.email}`}>
                  <ShinyText
                    text={user?.email}
                    disabled={false}
                    speed={3}
                    className="footerInfoItem"
                  />
                </a>
              </div>
            )}

            {user.authorization.show_telefon && (
              <div className="footerInfoItem">
                {phone()}
                <a href={`tel:${user?.phone}`}>
                  <ShinyText
                    text={user?.phone}
                    disabled={false}
                    speed={3}
                    className="footerInfoItem"
                  />
                </a>
              </div>
            )}

            {user.authorization.show_location && (
              <div className="footerInfoItem">
                {google_maps_old()}
                <span>
                  <ShinyText
                    text={user?.location}
                    disabled={false}
                    speed={3}
                    className="footerInfoItem"
                  />
                </span>
              </div>
            )}
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
        Mit {for_you({ width: 30, className: "mr-1" })} gemacht
      </div>
    </div>
  );
};
