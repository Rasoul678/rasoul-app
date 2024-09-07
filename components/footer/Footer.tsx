import React from "react";

import Link from "next/link";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";

interface IProps {}

export const Footer: React.FC<IProps> = (props) => {
  return (
    <div className="relative bg-black">
      <div className="footerWrapper">
        <div className="footerInfoWarapper">
          <div className="flex flex-col gap-3 flex-grow justify-center">
            <div className="footerInfoItem">
              {iconsList.user()}
              <span>Rasoul Hesami Rostami</span>
            </div>
            <div className="footerInfoItem">
              {iconsList.phone()}
              <a href="tel:+989399138354">(+98)9399138354</a>
            </div>
            <div className="footerInfoItem">
              {iconsList.mail()}
              <a href="mailto: h.rostami.r@gmail.com">h.rostami.r@gmail.com</a>
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
        Mit {iconsList.forYou({ width: 30 })} gemacht
      </div>
    </div>
  );
};
