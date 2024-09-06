import React from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";

interface IProps {}

export const Footer: React.FC<IProps> = (props) => {
  return (
    <div className="footerWrapper">
      <div className="footerInfoWarapper">
        <div className="flex flex-col gap-3 flex-grow">
          <div className="footerInfoItem">
            {iconsList.user()}➜ <span>Rasoul Hesami Rostami</span>
          </div>
          <div className="footerInfoItem">
            {iconsList.phone()}➜ <a href="tel:+989399138354">(+98)9399138354</a>
          </div>
          <div className="footerInfoItem">
            {iconsList.mail()}➜
            <a href="mailto: h.rostami.r@gmail.com">h.rostami.r@gmail.com</a>
          </div>
          <div className="footerInfoItem">
            {iconsList.googleMaps()}➜{" "}
            <a
              href="https://maps.app.goo.gl/ndSDE2sZNMPXYqHz6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iran
            </a>
          </div>
        </div>
        <div className="footerLinks">
          <CustomLink className="hover:text-teal-400" href="/">
            Home
          </CustomLink>
          <CustomLink className="hover:text-teal-400" href="articles">
            Articles
          </CustomLink>
          <CustomLink className="hover:text-teal-400" href="live">
            Live
          </CustomLink>
          <CustomLink className="hover:text-teal-400" href="about">
            About
          </CustomLink>
        </div>
      </div>
      <Astronaut
        socials={[
          "github",
          "linkedin",
          "telegram",
          "medium",
          "stack",
          "youtube",
        ]}
        className="w-[9rem]"
        heading="Find me in social media"
      />
    </div>
  );
};
