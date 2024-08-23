import React from "react";

import { Metadata } from "next";

import JavascriptArticles from "@components/Cards/Stacks/JavascriptCard";
import NextJsArticles from "@components/Cards/Stacks/NextJsCard";
import ReactArticles from "@components/Cards/Stacks/ReactCard";
import RustArticle from "@components/Cards/Stacks/RustCard";
import SQLArticle from "@components/Cards/Stacks/SQLCard";
import TypescriptArticles from "@components/Cards/Stacks/TypescriptCard";

export const metadata: Metadata = {
  title: "articles",
};

interface IProps {}

const AllArticles: React.FC<IProps> = async (props) => {
  return (
    <div>
      <h1 className="font-my_edu text-4xl text-center my-[1.5rem] sm:my-[2.5rem] uppercase">
        All Articles
      </h1>
      <div className="w-full overflow-hidden flex gap-6 lg:gap-4 flex-wrap justify-center">
        <ReactArticles />
        <NextJsArticles />
        <JavascriptArticles />
        <TypescriptArticles />
        <RustArticle />
        <SQLArticle />
      </div>
    </div>
  );
};

export default AllArticles;
