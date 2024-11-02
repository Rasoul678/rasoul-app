"use client";

import React from "react";

import { TAGS } from "@components/infinite-loop-slider/constants";
import { UserContext } from "@components/user-provider";
import { RepoType } from "@types";

import { TimeSection } from "./components";
import Education from "./components/Education";
import Repos from "./components/Repos";
import TechListIcons from "./components/TechListIcons";

type IProps = {
  repos: RepoType[];
};

const TimeLine: React.FC<IProps> = ({ repos }) => {
  const { user } = React.useContext(UserContext);

  return (
    <div>
      {user.authorization.show_skills && (
        <TimeSection
          animate
          animationDir="left"
          title="Tools"
          wrapperId="tools"
          tagList={TAGS}
        >
          {() => <TechListIcons />}
        </TimeSection>
      )}

      {user.authorization.show_repos && (
        <TimeSection
          animate
          animationDir="right"
          title="Github Repositories"
          tagList={repos.map((r: any) => r.name)}
          color="ffe082"
          wrapperId="github"
        >
          {() => <Repos repos={repos} />}
        </TimeSection>
      )}
      {user.authorization.show_education && (
        <TimeSection
          title="Academic Educations"
          tagList={["Master & Bachelor"]}
          color="f48fb1"
          wrapperId="education"
        >
          {() => <Education />}
        </TimeSection>
      )}
    </div>
  );
};

export default TimeLine;
