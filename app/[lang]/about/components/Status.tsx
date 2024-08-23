import React from "react";

import { iconsList } from "@components/icons";

type IProps = {};

const Status: React.FC<IProps> = () => {
  return (
    <div className="w-full lg:w-4/12 px-4 lg:order-1">
      <div className="flex justify-center py-4 lg:pt-4 pt-8">
        <div className="mr-4 p-3 text-center">
          <div className="relative flex justify-center">
            {iconsList.uncheckAll({ width: 50 })}
            <span className="absolute top-[33%] text-sm text-gray-800 font-bold uppercase tracking-wide text-blueGray-600">
              {67}
            </span>
          </div>
          <span className="text-sm text-blueGray-400 block">Followers</span>
        </div>
        <div className="mr-4 p-3 text-center">
          <div className="relative flex justify-center">
            {iconsList.uncheckAll({ width: 50 })}
            <span className="absolute top-[33%] text-sm text-gray-800 font-bold uppercase tracking-wide text-blueGray-600">
              {20}
            </span>
          </div>
          <span className="text-sm text-blueGray-400 block">Following</span>
        </div>
        <div className="lg:mr-4 p-3 text-center">
          <div className="relative flex justify-center">
            {iconsList.uncheckAll({ width: 50 })}
            <span className="absolute top-[33%] text-sm text-gray-800 font-bold uppercase tracking-wide text-blueGray-600">
              {10}
            </span>
          </div>
          <span className="text-sm text-blueGray-400 block">Prompts</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
