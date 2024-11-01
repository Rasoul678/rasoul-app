"use client";

import React from "react";

import { iconsList } from "@components/icons";
import ProfileImage from "@components/ProfileImage";
import { UserContext } from "@components/user-provider";

type IProps = {};

const ProfileMain: React.FC<IProps> = () => {
  const { user } = React.useContext(UserContext);

  const about_me =
    user.about.length >= 400
      ? user.about.substring(0, 400).concat(" ...")
      : user.about;

  return (
    <>
      <div className="flex flex-wrap justify-center items-start">
        <div className="flex justify-center">
          <ProfileImage
            src={user.picture_url}
            wrapperClassName="w-[8rem] -top-[3.5rem]"
          />
        </div>
      </div>
      <div className="text-center flex-1 min-h-[22rem] max-h-[22rem] overflow-clip sm:min-h-[12rem] -mt-[2rem]">
        <h3 className="text-2xl md:text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
          {user.name}
        </h3>
        <div className="flex justify-center gap-2 text-md text-gray-300 leading-6 sm:mx-2 md:mx-10 text-justify font-my_edu">
          <div className="self-start flex justify-center min-w-[3rem]">
            {iconsList.quote_start({ width: 25 })}
          </div>
          <p className="sm:mx-[0.5rem]">{about_me}</p>
          <p className="self-end flex justify-center min-w-[3rem]">
            {iconsList.quote_end({ width: 25 })}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
