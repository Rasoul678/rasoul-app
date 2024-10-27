"use client";

import { useContext } from "react";

import Astronaut from "@components/Astronaut";
import CustomLink from "@components/CustomLink";
import { IntlContext } from "@components/intl-provider";
import ProfileImage from "@components/ProfileImage";

import { UserContext } from "@components/user-provider";
import WordLoader from "@components/WordLoader";

import { myContact } from "@utils/constants";

import Shortcuts from "./Shortcuts";

const HomeHero: React.FC = () => {
  const intl = useContext(IntlContext);
  const userContext = useContext(UserContext);

  const name = userContext?.user.Person.people[0].name || myContact.name;

  const me = intl?.dict.me!;

  return (
    <div className="heroWrapper fade-out-anim">
      <div className="hidden lg:block">
        <Astronaut className="md:w-[12rem]" />
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
            <ProfileImage wrapperClassName="w-[7rem]" />
          </CustomLink>

          <span className="me">{name}</span>
        </div>
        <WordLoader />
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
