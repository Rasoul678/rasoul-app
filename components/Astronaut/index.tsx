"use client";

import React, { useContext } from "react";

import Link from "next/link";

import AstronautPNG from "@assets/astronaut.png";
import { iconsList } from "@components/icons";
import { SocialListType } from "@components/icons/socials";
import ImageWithFallback from "@components/ImageWithFallback";
import { IntlContext } from "@components/intl-provider";

type IProps = {
  className?: string;
  heading?: string;
  socials?: Array<SocialListType>;
};

const Astronaut: React.FC<IProps> = (props) => {
  const {
    className = "w-[15rem]",
    heading,
    socials = ["github", "telegram", "linkedin"],
  } = props;
  const intl = useContext(IntlContext);
  const followMe = intl?.dict["follow-me"]!;

  return (
    <div className="astronautWrapper">
      <ImageWithFallback
        className={`image ${className}`}
        alt="my-astronaut-avatar"
        width={500}
        height={500}
        src={AstronautPNG}
      />
      <div className="relative flex flex-col gap-3 rounded-[2rem]">
        <div data-vi="vit-astr-head" className="heading">
          {heading || followMe}
        </div>
        <div className="flex justify-center gap-2">
          {socials?.map((social) => {
            return (
              <Link
                data-vi="vit-astr-link"
                key={social}
                href={"#"}
                className="flex items-center justify-center"
              >
                {iconsList.socials[social]({ width: 40 })}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Astronaut;
