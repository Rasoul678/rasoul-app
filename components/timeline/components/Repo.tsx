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
      {iconsList.stacks.git({ width: 30, alt: repo.name })}
      <code className="mt-2 flex gap-2 truncate">
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="blue_gradient text-xl"
        >
          {repo.name}
        </Link>
      </code>
      <div className="flex-grow text-end hidden sm:block">
        {repo.all_languages.map((lang) => (
          <code
            key={lang[1]}
            className="text-sm mx-[0.2rem] underline green_gradient font-bold"
          >
            {lang[0]}
          </code>
        ))}
      </div>
    </>
  );
};

export default Repo;
