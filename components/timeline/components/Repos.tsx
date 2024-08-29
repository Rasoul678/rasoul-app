import React from "react";

import { RepoType } from "@types";

import Repo from "./Repo";

type IProps = {
  repos: RepoType[];
};

const Repos: React.FC<IProps> = ({ repos }) => {
  return (
    <div className="w-[77%] mt-14 flex flex-col gap-4 overflow-hidden py-2">
      <div className="hidden sm:flex justify-between text-[1.1rem] font-my_concert pb-2 border-b border-cyan-500">
        <div>Repos Name</div>
        <div>Languages</div>
      </div>
      {repos.slice(0, 10).map((repo) => {
        return (
          <div key={repo.id} className="flex items-center h-6 gap-3">
            <Repo repo={repo} />
          </div>
        );
      })}
    </div>
  );
};

export default Repos;
