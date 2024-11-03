import React from "react";

import { Metadata } from "next";

import { getDBUser } from "@utils";

export const metadata: Metadata = {
  title: "articles",
};

type IProps = {};

const loadComponent = ({ name }: { name: string }) => {
  const EmpyComponent = () => <></>;

  const Component = React.lazy(() =>
    import(`@components/Cards/Stacks/${name}Card`).catch((err) => {
      console.error("Component Failed Loading:", err);
      console.error(
        `Either check for misspelled compoent name in "utils/constants.ts" or add ${name}.tsx component in "components/Cards/Stacks" path`
      );
      return { default: EmpyComponent };
    })
  );
  return { Component, name };
};

const MyArticles: React.FC<IProps> = async () => {
  const user = await getDBUser();

  const article_components = user.articles_list.map(loadComponent);

  return (
    <div>
      <h1 className="font-my_exo2 text-4xl text-center my-[1.5rem] sm:my-[2.5rem] uppercase text-cyan-400">
        My Articles
      </h1>
      <div className="fade-out-anim w-full overflow-hidden grid gap-[0.6rem] sm:gap-4 xl:gap-8 max-[470px]:grid-cols-1 min-[470px]:grid-cols-2 sm:grid-cols-3 min-[800px]:grid-cols-4 min-[1075px]:grid-cols-5 min-[1150px]:grid-cols-5 p-4">
        {article_components.map(({ Component, name }) => (
          <Component key={name} />
        ))}
      </div>
    </div>
  );
};

export default MyArticles;
