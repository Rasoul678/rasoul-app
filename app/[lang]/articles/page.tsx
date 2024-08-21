import React from "react";

import { Metadata } from "next";

import CustomLink from "@components/CustomLink";

export const metadata: Metadata = {
  title: "articles",
};

interface IProps {}

const AllArticles: React.FC<IProps> = async (props) => {
  return (
    <div>
      <h1 className="font-nunito text-4xl text-center my-[2.5rem] text-green-600 uppercase">
        All Articles
      </h1>
      <CustomLink href="/articles/Typescript">Typescript</CustomLink>
      <br />
      <CustomLink href="/articles/React">React</CustomLink>
      <br />
      <CustomLink href="/articles/Python">Python</CustomLink>
    </div>
  );
};

export default AllArticles;
