import React from "react";

import { dehydrate } from "@tanstack/react-query";

import { Metadata } from "next";

import { notionService } from "@utils/api-service";
import getQueryClient from "@utils/react-query/getQueryClient";
import Hydrate from "@utils/react-query/hydrate.client";

import NotionArticles from "./NotionArticles";

export const metadata: Metadata = {
  title: 'articles',
}

interface IProps {}

const getRecords = async () => {
  const records = await notionService.getDBMain();

  return records;
};

const Notion: React.FC<IProps> = async (props) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hydrate-notion-db"],
    queryFn: getRecords,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <h1 className="font-nunito text-4xl text-center my-[2.5rem] text-green-600 uppercase">
        My Articles
      </h1>
      <Hydrate state={dehydratedState}>
        <NotionArticles />
      </Hydrate>
    </div>
  );
};

export default Notion;
