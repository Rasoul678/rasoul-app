"use client";

import React from "react";

import { PersonUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import ProfileImage from "@components/ProfileImage";

interface IProps {
  user: PersonUserObjectResponse;
}

const ProfileMain: React.FC<IProps> = ({ user }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-start">
        <div className="flex justify-center">
          <ProfileImage wrapperClassName="w-[8rem] -top-[3.5rem]" />
        </div>
      </div>
      <div className="text-center -mt-6">
        <h3 className="text-2xl md:text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
          {user.name}
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