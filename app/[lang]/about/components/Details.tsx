import React from "react";

import dynamic from "next/dynamic";

import Spinner from "@components/spinner";

const MoreAboutMe = dynamic(
  () => import("./details/MoreAboutMe").then((mod) => mod.default),
  {
    loading: () => <Spinner />,
  }
);

type IProps = {};

const ProfileDetails: React.FC<IProps> = () => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="py-3 border-t border-blueGray-200 text-center">
      <div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-9/12">
            <button
              className="w-full font-my_quicksand text-cyan-500 outline-none text-md font-semibold hover:text-[gold]"
              onClick={() => setShowMore((v) => !v)}
            >
              SHOW {showMore ? "LESS" : "MORE"}
            </button>
          </div>
          {showMore && <MoreAboutMe />}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
