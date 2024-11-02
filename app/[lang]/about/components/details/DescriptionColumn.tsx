import React from "react";

import { iconsList } from "@components/icons";
import { UserContext } from "@components/user-provider";

import Section from "./Section";

const { target, curriculum_resume, worker } = iconsList;
type IProps = {};

const DescriptionColumn: React.FC<IProps> = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div className="w-full md:w-9/12 sm:mx-3 mt-4 sm:mt-0 flex flex-col gap-3">
      <Section icon={target()} title="ABOUT ME">
        <>
          <li className="grid grid-cols-[1fr_2.8fr]">
            <p className="px-2 font-semibold text-left">Name:</p>
            <p className="text-left text-cyan-500 font-my_exo2">{user.name}</p>
          </li>

          <li className="grid grid-cols-[1fr_2.8fr]">
            <p className="px-2 font-semibold text-left">Email:</p>
            <p className="text-left">
              <a
                className="text-cyan-500 font-my_exo2"
                href={`mailto:${user.email}`}
              >
                {user.email}
              </a>
            </p>
          </li>
          <li className="grid grid-cols-[1fr_2.8fr]">
            <p className="px-2 font-semibold text-left">Birthday:</p>
            <p className="text-left text-cyan-500 font-my_exo2">April.7.1988</p>
          </li>
        </>
      </Section>
      <Section icon={curriculum_resume()} title="EDUCATION">
        <>
          <li className="grid grid-cols-[1fr] sm:grid-cols-[1fr_.5fr]">
            <p className="px-2 text-cyan-500 text-lg text-left font-my_exo2">
              Masters Degree in SBU
            </p>
            <p className="text-gray-300 text-xs leading-8 hidden sm:block">
              March 2020 - Now
            </p>
          </li>
          <li className="grid grid-cols-[1fr] sm:grid-cols-[1fr_.5fr]">
            <p className="px-2 text-cyan-500 text-lg text-left font-my_exo2">
              Bachelors Degree in MUT
            </p>
            <p className="text-gray-300 text-xs leading-8 hidden sm:block">
              March 2020 - Now
            </p>
          </li>
        </>
      </Section>
      <Section icon={worker()} title="EXPERIENCE">
        <>
          {user.experiences.map((exp) => {
            const { id, name } = exp;
            const content = name.split("@");

            return (
              <li
                className="grid grid-cols-[1fr] sm:grid-cols-[1fr_.5fr]"
                key={id}
              >
                <p className="px-2 text-cyan-500 text-lg text-left font-my_exo2">
                  {content[0] || "company name"}
                </p>
                <p className="text-gray-300 text-xs leading-8 hidden sm:block">
                  {content[1] || "before"}- {content[2] || "now"}
                </p>
              </li>
            );
          })}
        </>
      </Section>
    </div>
  );
};

export default DescriptionColumn;
