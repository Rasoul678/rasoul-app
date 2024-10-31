"use client";

import React from "react";

import { iconsList } from "@components/icons";
import ProfileImage from "@components/ProfileImage";
import { UserContext } from "@components/user-provider";

type IProps = {};

const ProfileMain: React.FC<IProps> = () => {
  const { user } = React.useContext(UserContext);

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
      <div className="text-center flex-1 min-h-[22rem] sm:min-h-[12rem] -mt-[2rem]">
        <h3 className="text-2xl md:text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
          {user.name}
        </h3>
        <p className="flex gap-2 text-md text-gray-300 leading-6 sm:mx-2 md:mx-10 text-justify font-my_edu">
          <span className="self-start">
            {iconsList.quote_start({ width: 200 })}
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt.
          <span className="self-end">
            {iconsList.quote_end({ width: 200 })}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProfileMain;
