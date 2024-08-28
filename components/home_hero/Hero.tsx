"use client";

import { useContext } from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { CustomTypewriter } from "@components/CustomTypewriter/CustomTypewriter";
import { IntlContext } from "@components/intl-provider";
import ProfileImage from "@components/ProfileImage";

import WordLoader from "@components/WordLoader";

import Shortcuts from "./Shortcuts";

const HomeHero: React.FC = () => {
  const intl = useContext(IntlContext);

  const me = intl?.dict.me!;

  return (
    <div className="min-h-[calc(100lvh-3.3rem)] max-h-[calc(100lvh-3.3rem)] flex flex-col-reverse md:flex-row justify-around md:justify-end gap-0 items-center md:items-stretch px-[2rem] sm:px-[6rem]">
      <div className="hidden lg:block">
        <Astronaut className="md:w-[12rem]" />
      </div>
      <div className="mb-3 md:hidden">
        <Shortcuts />
      </div>
      <div className="flex flex-col justify-start gap-[0.7rem] md:gap-[3.5rem] h-full w-full items-center">
        <div className="w-full flex flex-col justify-center items-center md:block  md:text-5xl mt-[0.5rem] sm:mt-[2rem]">
          <CustomLink
            href="aboutme"
            className="w-[7rem] hidden md:block md:m-auto"
          >
            <ProfileImage wrapperClassName="w-[7rem]" />
          </CustomLink>
          {/* <span className="text-xl md:text-[1.5rem] font-bold block text-center">
            {welcome}
          </span> */}
          <span className="text-[1.5rem] md:text-[3rem] xl:text-[3.3rem] font-bold block leading-[4rem] md:leading-[5rem] text-center">
            {me}
          </span>
        </div>
        <div className="text-center">
          <CustomTypewriter
            text="Let me introduce myself!"
            wrapperClassName={`text-[1.7rem] md:text-4xl p-2 ${
              intl?.lang !== "fa" && "font-my_edu"
            }`}
            cursorClassName="text-teal-400 text-[2rem]"
            cursor=" "
            loop={false}
          />
          <WordLoader />
        </div>
        <div className="md:hidden">
          <Astronaut className="w-[8.5rem]" />
        </div>
        <div className="hidden md:block">
          <Shortcuts />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
