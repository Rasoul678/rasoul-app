"use client";

import { useContext } from "react";
import ProfilePic from "@assets/profile-pic-2.jpg";
import ProfileFrame from "@assets/frame.png";
import Image from "next/image";
import { CustomTypewriter } from "@components/CustomTypewriter/CustomTypewriter";
import { IntlContext } from "@components/intl-provider";
import { iconsList } from "@components/icons";
import Link from "next/link";
import Astronaut from "@components/Astronaut";

const HomeHero: React.FC = () => {
  const intl = useContext(IntlContext);

  const welcome = intl?.dict.hero["intro-welcome"];
  const me = intl?.dict.me!;

  return (
    <div className="h-full flex flex-col-reverse md:flex-row-reverse justify-between gap-2 items-center px-[2rem] sm:px-[6rem]">
      <div>
        <Astronaut className="w-[8rem] md:w-[15rem]" />
      </div>
      <div className="flex flex-col justify-start gap-[2rem] sm:gap-[3.5rem] flex-grow h-full w-full items-center md:items-start">
        <div className="flex flex-col justify-center items-center md:block  md:text-5xl mt-[2rem]">
          <div className="relative w-[7rem]">
            <Image
              src={ProfilePic}
              alt="My-Picture"
              aria-label="my profile picture"
              width={150}
              height={150}
              className="rounded-full"
            />
            <Image
              src={ProfileFrame}
              alt="my-frame"
              className="avatar-frame anim-spin"
              width={150}
              height={150}
            ></Image>
          </div>
          <span className="text-xl md:text-[1.5rem] font-bold">{welcome}</span>
          <span className="text-[1.7rem] md:text-[3.5rem] font-bold block leading-[4rem]">
            {me}
          </span>
        </div>
        <div>
          <CustomTypewriter
            strings={[
              "And... what?",
              "Let me introduce myself!",
              intl?.dict.typewriter[1]!,
              intl?.dict.typewriter[2]!,
            ]}
            wrapperClassName="text-[1.7rem] md:text-4xl p-2 font-my_edu"
            cursorClassName="text-teal-400 text-[2rem]"
            cursor=" "
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3  md:text-lg font-my_concert text-center">
          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="Typescript"
          >
            <Link href="#tools">Typescript</Link>
          </span>
          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="Javascript"
          >
            <Link href="#tools">Javascript</Link>
          </span>

          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="ReactJS"
          >
            <Link href="#tools">ReactJS</Link>
          </span>

          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="HTML"
          >
            <Link href="#tools">NextJs</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
