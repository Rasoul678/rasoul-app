"use client";

import { useContext } from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { CustomTypewriter } from "@components/CustomTypewriter/CustomTypewriter";
import { IntlContext } from "@components/intl-provider";
import ProfileImage from "@components/ProfileImage";

import Shortcuts from "./Shortcuts";

const HomeHero: React.FC = () => {
  const intl = useContext(IntlContext);

  const welcome = intl?.dict.hero["intro-welcome"];
  const me = intl?.dict.me!;

  return (
    <div className="min-h-[calc(100lvh-3.3rem)] flex flex-col-reverse md:flex-row-reverse justify-end gap-8 items-center md:items-stretch px-[2rem] sm:px-[6rem]">
      <div className="hidden md:block">
        <Astronaut className="md:w-[15rem]" />
      </div>
      <div className="mb-3 md:hidden">
        <Shortcuts />
      </div>
      <div className="flex flex-col justify-start gap-[0.7rem] sm:gap-[2.5rem] lg:gap-[3.5rem] h-full w-full items-center md:items-start">
        <div className="flex flex-col justify-center items-center md:block  md:text-5xl mt-[0.5rem] sm:mt-[2rem]">
          <CustomLink href="/aboutme" className="w-[7rem] hidden sm:block">
            <ProfileImage wrapperClassName="w-[7rem]" />
          </CustomLink>
          <span className="text-xl md:text-[1.5rem] font-bold">{welcome}</span>
          <span className="text-[1.5rem] md:text-[3.3rem] font-bold block leading-[4rem] md:leading-[5rem]">
            {me}
          </span>
        </div>
        <div className="h-[5rem] sm:h-[3rem] text-center">
          <CustomTypewriter
            strings={[
              "And... what?",
              "Let me introduce myself!",
              ...intl?.dict.typewriter!,
            ]}
            wrapperClassName={`text-[1.7rem] md:text-4xl p-2 ${
              intl?.lang !== "fa" && "font-my_edu"
            }`}
            cursorClassName="text-teal-400 text-[2rem]"
            cursor=" "
          />
        </div>
        <div className="md:hidden">
          <Astronaut className="w-[7.5rem] md:w-[15rem]" />
        </div>
        <div className="hidden md:block">
          <Shortcuts />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
