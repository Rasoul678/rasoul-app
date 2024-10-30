import React from "react";

import { iconsList } from "@components/icons";
import { UserContext } from "@components/user-provider";

type IProps = {};

const DescriptionColumn: React.FC<IProps> = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div className="w-full md:w-9/12 sm:mx-3 mt-4 sm:mt-0">
      <section className="bg-gray-900 p-3 shadow-sm rounded-md">
        <div className="text-gray-300 flex items-center space-x-2 font-semibold leading-8 my-2">
          <span>{iconsList.target()}</span>
          <span className="tracking-wide">ABOUT ME</span>
        </div>
        <div className="text-gray-300">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 text-sm">
            <div className="grid grid-cols-[1fr_2.8fr]">
              <div className="px-4 py-2 font-semibold text-left">Name:</div>
              <div className="py-2 text-left text-cyan-500 font-my_exo2">
                {user.name}
              </div>
            </div>

            <div className="grid grid-cols-[1fr_2.8fr]">
              <div className="px-4 py-2 font-semibold text-left">Email:</div>
              <div className="py-2 text-left">
                <a
                  className="text-cyan-500 font-my_exo2"
                  href={`mailto:${user.email}`}
                >
                  {user.email}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2.8fr]">
              <div className="px-4 py-2 font-semibold text-left">Birthday:</div>
              <div className="py-2 text-left text-cyan-500 font-my_exo2">
                April.7.1988
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-4"></div>

      <div className="bg-gray-900 p-3 shadow-sm rounded-md">
        <div className="text-gray-300 flex items-center space-x-2 font-semibold leading-8 mb-3">
          <span>{iconsList.curriculum_resume()}</span>
          <span className="tracking-wide">EDUCATION</span>
        </div>
        <ul className="list-inside space-y-2">
          <li>
            <div className="text-teal-400">Masters Degree in SBU</div>
            <div className="text-gray-300 text-xs">March 2020 - Now</div>
          </li>
          <li>
            <div className="text-teal-400">Bachelors Degreen in MUT</div>
            <div className="text-gray-300 text-xs">March 2020 - Now</div>
          </li>
        </ul>
      </div>

      <div className="my-4"></div>

      <div className="bg-gray-900 p-3 shadow-sm rounded-md">
        <div className="text-gray-300 flex items-center space-x-2 font-semibold leading-8 mb-3">
          <span>{iconsList.worker()}</span>
          <span className="tracking-wide">EXPERIENCE</span>
        </div>
        <ul className="list-inside space-y-2">
          <li>
            <div className="text-teal-400">Owner at Her Company Inc.</div>
            <div className="text-gray-300 text-xs">March 2020 - Now</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionColumn;
