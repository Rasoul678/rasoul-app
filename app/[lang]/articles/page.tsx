import React from "react";

import { Metadata } from "next";

import JavascriptArticles from "@components/Cards/Stacks/JavascriptCard";
import PythonArticles from "@components/Cards/Stacks/PythonCard";
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
      <h1 className="font-my_edu text-4xl text-center my-[2.5rem] text-green-600 uppercase">
        All Articles
      </h1>
      <div className="w-full overflow-hidden flex gap-4 flex-wrap justify-center">
        <ReactArticles />
        <PythonArticles />
        <JavascriptArticles />
        <TypescriptArticles />
        <RustArticle />
        <SQLArticle />
      </div>
    </div>
  );
};

export default AllArticles;
