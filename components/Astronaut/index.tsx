import React, { useContext } from "react";

import Image from "next/image";
import Link from "next/link";

import AstronautPNG from "@assets/astronaut.png";
import { iconsList } from "@components/icons";
import { IntlContext } from "@components/intl-provider";

interface IProps {
  className?: string;
  heading?: string;
}

/**
 * An Astronaut component.
 *
 * @component
 * @param {string} props.className - The class for image
 * @param {string} props.heading - The heading text
 * @returns {JSX.Element} The rendered Astronaut component.
 *
 * @example
 *  Render a Astronaut component and a text
 * <Astronaut heading="..." className="..." />
 */

const Astronaut: React.FC<IProps> = ({ className = "w-[15rem]", heading }) => {
  const intl = useContext(IntlContext);
  const followMe = intl?.dict["follow-me"]!;

  return (
    <div className="astronautWrapper">
      <Image
        className={`image ${className}`}
        alt="my astronaut avatar"
        width={500}
        height={500}
        src={AstronautPNG}
      />
      <div className="relative rounded-[2rem]">
        <div data-vi='astronaut-vi' className="heading">{heading || followMe}</div>
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
