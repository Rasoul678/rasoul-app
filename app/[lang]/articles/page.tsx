import React from "react";

import { Metadata } from "next";

import { articlesList } from "@utils/constants";

const EmpyComponent = () => <></>;

const articleComponents = articlesList.map((name) => {
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
});

export const metadata: Metadata = {
  title: "articles",
};

interface IProps {}

const AllArticles: React.FC<IProps> = async (props) => {
  return (
    <div>
      <h1 className="font-my_edu text-4xl text-center my-[1.5rem] sm:my-[2.5rem] uppercase text-cyan-400">
        All Articles
      </h1>
      <div className="w-full overflow-hidden flex gap-6 lg:gap-4 flex-wrap justify-center">
        {articleComponents.map(({ Component, name }) => (
          <Component key={name} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
