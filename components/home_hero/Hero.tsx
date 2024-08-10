"use client";

import { useContext } from "react";
import { CustomTypewriter } from "@components/CustomTypewriter/CustomTypewriter";
import { IntlContext } from "@components/intl-provider";
import Astronaut from "@components/Astronaut";
import Shortcuts from "./Shortcuts";
import ProfileImage from "@components/ProfileImage";
import CustomLink from "@components/CustomLink";

const HomeHero: React.FC = () => {
  const intl = useContext(IntlContext);

  const welcome = intl?.dict.hero["intro-welcome"];
  const me = intl?.dict.me!;

  return (
    <div className="min-h-full flex flex-col-reverse md:flex-row-reverse justify-between gap-2 items-center px-[2rem] sm:px-[6rem]">
      <div className="hidden sm:block">
        <Astronaut className="w-[8rem] md:w-[15rem]" />
      </div>
      <div className="sm:hidden">
        <Shortcuts />
      </div>
      <div className="flex flex-col justify-start gap-[1.7rem] sm:gap-[2.5rem] lg:gap-[3.5rem] flex-grow h-full w-full items-center md:items-start">
        <div className="flex flex-col justify-center items-center md:block  md:text-5xl mt-[0.5rem] sm:mt-[2rem]">
          <CustomLink href="/aboutme" className="w-[7rem] hidden sm:block">
            <ProfileImage wrapperClassName="w-[7rem]" />
          </CustomLink>
          <span className="text-xl md:text-[1.5rem] font-bold">{welcome}</span>
          <span className="text-[1.5rem] md:text-[3.5rem] font-bold block leading-[4rem]">
            {me}
          </span>
        </div>
        <div className="sm:min-h-[3rem]">
          <CustomTypewriter
            strings={[
              "And... what?",
              "Let me introduce myself!",
              ...intl?.dict.typewriter!,
            ]}
            wrapperClassName="text-[1.7rem] md:text-4xl p-2 font-my_edu"
            cursorClassName="text-teal-400 text-[2rem]"
            cursor=" "
          />
        </div>
        <div className="sm:hidden">
          <Astronaut className="w-[8rem] md:w-[15rem]" />
        </div>
        <div className="hidden sm:block">
          <Shortcuts />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
