import React from "react";

import Image from "next/image";

import Link from "next/link";

import verified from "@assets/icon-pack/instagram_verification_badge.svg";
import { iconsList } from "@components/icons";
import { UserContext } from "@components/user-provider";

type IProps = {};

const UserExcerptColumn: React.FC<IProps> = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div className="w-full md:w-3/12 md:mx-2">
      <div className="bg-gray-900 rounded-md p-3">
        <h1 className="text-white font-bold text-xl leading-8 my-1 mt-4">
          RESUME
        </h1>
        <div className="flex justify-center">
          {iconsList.resume_doc({ width: 150 })}
        </div>
        <Link
          href={user.CV_url}
          download={true}
          className="text-[gold] font-semibold text-sm"
        >
          DOWNLOAD
        </Link>

        <div className="flex gap-1 items-center text-gray-400 hover:text-gray-200 hover:shadow py-2 px-3 mt-3 rounded shadow-sm">
          <span>
            <Image src={verified} alt="verified" width={30} />
          </span>
          <span>Up to date</span>
        </div>
      </div>
    </div>
  );
};

export default UserExcerptColumn;
