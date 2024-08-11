import React from "react";
import Image from "next/image";
import AstronautPNG from "@assets/astronaut.png";
import { iconsList } from "@components/icons";
import Link from "next/link";

interface IProps {
  className?: string;
  heading?: string;
}

/**
 * An Astronaut component.
 *
 * @component
 * @param {Object} props - The component accepts width as props
 * @param {string} props.className - The width for image
 * @returns {JSX.Element} The rendered Astronaut component.
 *
 * @example
 *  Render a button with the text "Click Me"
 * <Button text="Click Me" onClick={() => console.log('Button clicked!')} />
 */

const Astronaut: React.FC<IProps> = ({ className = "w-[15rem]", heading }) => {
  return (
    <div className="astronautWrapper">
      <Image
        className={`image ${className}`}
        alt="my astronaut avatar"
        width={500}
        height={500}
        src={AstronautPNG}
      />
      <div className="heading">{heading || "Please follow me!"}</div>
      <div className="relative rounded-[2rem]">
        <div className="socialLinks flex justify-center gap-2 rounded-[2rem]">
          <Link href={"#"} className="instagram socialContainer">
            {iconsList.socials.github()}
          </Link>
          {iconsList.socials.linkedin()}
          {iconsList.socials.twitter()}
        </div>
      </div>
    </div>
  );
};

export default Astronaut;
