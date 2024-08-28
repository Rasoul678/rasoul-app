"use client";

import React, { useContext } from "react";

import Link from "next/link";

import AstronautPNG from "@assets/astronaut.png";
import { iconsList } from "@components/icons";
import ImageWithFallback from "@components/ImageWithFallback";
import { IntlContext } from "@components/intl-provider";

interface IProps {
  className?: string;
  heading?: string;
}

/**
 * Renders an astronaut avatar with a heading and social media links.
 *
 * @param {IProps} props - The component props.
 * @param {string} [props.className] - An optional CSS class name to apply to the image.
 * @param {string} [props.heading] - An optional heading to display below the astronaut image.
 * @returns {React.ReactElement} - The rendered astronaut component.
 */
const Astronaut: React.FC<IProps> = ({ className = "w-[15rem]", heading }) => {
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
      <div className="relative rounded-[2rem]">
        <div data-vi="vit-astr-head" className="heading">
          {heading || followMe}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Link href={"#"}>{iconsList.socials.github()}</Link>
        {iconsList.socials.linkedin()}
        {iconsList.socials.twitter()}
      </div>
    </div>
  );
};

export default Astronaut;
