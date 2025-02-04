"use client";

import { useContext } from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { IntlContext } from "@components/intl-provider";
import ProfileImage from "@components/ProfileImage";
import TrueFocus from "@components/TrueFocus/TrueFocus";

import { UserContext } from "@components/user-provider";

import Shortcuts from "./Shortcuts";

const HomeHero: React.FC = () => {
  const intl = useContext(IntlContext);
  const { user } = useContext(UserContext);

  return (
    <div className="heroWrapper fade-out-anim">
      <div className="hidden lg:block">
        <Astronaut className="md:w-[11rem]" />
      </div>
      <div className="mb-3 md:hidden">
        <Shortcuts />
      </div>
      <div className="heroInfos">
        <div className="heroImage">
          <div
            className={`text-center text-[1.5rem] md:text-3xl p-2 md:hidden ${
              intl?.lang !== "fa" && "font-my_exo2"
            }`}
          >
            Who am I ?
          </div>
          <CustomLink
            href="about"
            className="w-[7rem] hidden md:block md:m-auto"
          >
            <ProfileImage src={user.picture_url} wrapperClassName="w-[7rem]" />
          </CustomLink>
          <TrueFocus
            sentence={user.name}
            manualMode={false}
            blurAmount={5}
            borderColor="#00D8FF"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          {/* <span className="me">{user.name}</span> */}
        </div>
        {/* <WordLoader /> */}
        <div className="md:hidden">
          <Astronaut className="w-[8rem]" />
        </div>
        <div className="hidden md:block">
          <Shortcuts />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
