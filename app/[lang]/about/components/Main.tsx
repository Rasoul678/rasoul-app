"use client";

import React from "react";

import ProfileImage from "@components/ProfileImage";
import { UserContext } from "@components/user-provider";
import { myDefault } from "@utils/constants";

interface IProps {}

const ProfileMain: React.FC<IProps> = () => {
  const userContext = React.useContext(UserContext);

  const name = userContext?.user.Person.people[0].name || myDefault.name;
  const profilePic = userContext?.user.ProfileImage.files[0].file?.url;

  return (
    <>
      <div className="flex flex-wrap justify-center items-start">
        <div className="flex justify-center">
          <ProfileImage
            src={profilePic}
            wrapperClassName="w-[8rem] -top-[3.5rem]"
          />
        </div>
      </div>
      <div className="text-center -mt-6">
        <h3 className="text-2xl md:text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
          {name}
        </h3>
        <p className="text-sm text-gray-400 hover:text-gray-500 leading-6 sm:mx-2 md:mx-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
          deserunt
        </p>
        <div className="flex flex-col md:flex-row md:mt-6 justify-around">
          <div>
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
            Occupation: Unknown
          </div>
          <div>
            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            Education: Unknown
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
