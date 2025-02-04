import React from "react";

import Link from "next/link";

import { iconsList } from "@components/icons";
import { RepoType } from "@types";

type IProps = {
  repo: RepoType;
};

const Repo: React.FC<IProps> = ({ repo }) => {
  return (
    <>
      <div className="flex gap-2">
        {iconsList.stacks.git({ width: 30, alt: repo.name })}
        <code className="mt-2 flex gap-2 truncate">
          <Link
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-teal-400"
          >
            {repo.name}
          </Link>
        </code>
      </div>
      <div className="flex-grow text-end hidden sm:block">
        {repo.all_languages.map((lang) => (
          <code
            key={lang[1]}
            className="font-my_edu text-xs mx-[0.2rem] underline blue_gradient font-bold border border-teal-400 rounded-2xl py-1 px-2"
          >
            {lang[0]}
          </code>
        ))}
      </div>
    </>
  );
};

export default Repo;
