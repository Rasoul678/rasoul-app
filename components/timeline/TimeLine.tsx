"use client";

import React from "react";

import { TAGS } from "@components/infinite-loop-slider/constants";
import { RepoType } from "@types";

import { TimeSection } from "./components";
import Education from "./components/Education";
import Repos from "./components/Repos";
import TechListIcons from "./components/TechListIcons";


type IProps = {
  repos: RepoType[];
};

const TimeLine: React.FC<IProps> = ({ repos }) => {
  return (
    <div>
      <TimeSection loop title="Tools" wrapperId="tools" tagList={TAGS}>
        {({ inView }) => <TechListIcons inView={inView} />}
      </TimeSection>
      <TimeSection
        loop
        title="Github Repositories"
        tagList={repos.map((r: any) => r.name)}
        color="ffe082"
        wrapperId="github"
      >
        {({ inView }) => <Repos repos={repos} inView={inView} />}
      </TimeSection>
      <TimeSection
        title="Academic Educations"
        tagList={["Master & Bachelor"]}
        color="f48fb1"
        wrapperId="education"
      >
        {({ inView }) => <Education inView={inView} />}
      </TimeSection>
    </div>
  );
};

export default TimeLine;
