import React from "react";

import dynamic from "next/dynamic";

import Spinner from "@components/spinner";
import useScrollTo from "@hooks/useScrollTo";

const MoreAboutMe = dynamic(
  () => import("./details/MoreAboutMe").then((mod) => mod.default),
  {
    loading: () => <Spinner />,
  }
);

type IProps = {};

const ProfileDetails: React.FC<IProps> = () => {
  const [showMore, setShowMore] = React.useState(false);
  const scrollTo = useScrollTo({ offset: 70 });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowMore((v) => !v);

    setTimeout(() => {
      const target = e.target as HTMLButtonElement;
      const anchor = target.dataset.anchor;
      if (anchor) {
        scrollTo(anchor);
      }
    }, 500);
  };

  return (
    <div className="py-3 border-t border-blueGray-200 text-center mt-3">
      <div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-9/12">
            <button
              className="w-full font-my_quicksand text-cyan-500 outline-none text-md font-semibold hover:text-[gold]"
              data-anchor="about"
              onClick={handleClick}
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
