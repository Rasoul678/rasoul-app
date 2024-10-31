import React from "react";

import Link from "next/link";

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
          className="text-[gold] font-semibold text-xs flex gap-1 items-center justify-center"
        >
          {iconsList.download({ width: 30 })}
          DOWNLOAD
        </Link>
      </div>
    </div>
  );
};

export default UserExcerptColumn;
