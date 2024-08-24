import React from "react";

import Link from "next/link";

import { iconsList } from "@components/icons";
import { externalLinks } from "@utils/constants";

type IProps = {
  inView: boolean;
};

const Education: React.FC<IProps> = ({ inView }) => {
  return (
    <div className="w-[86%] sm:w-[80%] mt-14 text-[1.1rem] sm:text-[1.3rem] flex flex-col gap-4 text-teal-400">
      <div
        className={`flex items-center px-5 h-10 gap-5 ${
          inView ? "in-view delay-[350ms]" : "out-view"
        }`}
      >
        {iconsList.ok({ width: 40, alt: "Ok" })}
        <span className="mt-2 flex gap-2">
          Master of Sience
          <span className="hidden md:inline">in Aerospace Engineering</span> at
          <Link
            href={externalLinks.SBU}
            target="_blank"
            rel="noopener noreferrer"
            className="red_gradient font-my_concert"
          >
            SBU
          </Link>{" "}
          <span className="hidden lg:inline">(Shahid Beheshti University)</span>
        </span>
      </div>
      <div
        className={`flex items-center px-5 h-10 gap-5 ${
          inView ? "in-view delay-[550ms]" : "out-view"
        }`}
      >
        {iconsList.ok({ width: 40, alt: "Ok" })}
        <span className="mt-2 flex gap-2">
          Bachelor of Sience
          <span className="hidden md:inline">in Aerospace Engineering</span> at
          <Link
            href={externalLinks.MUT}
            target="_blank"
            rel="noopener noreferrer"
            className="red_gradient font-my_concert"
          >
            MUT
          </Link>{" "}
          <span className="hidden lg:inline">(Malek-e-Ashtar University)</span>
        </span>
      </div>
    </div>
  );
};

export default Education;
