import { dehydrate } from "@tanstack/react-query";

import { Metadata, NextPage } from "next";

import { NextParamsType, NextSearchParamsType } from "@types";
import { notionService } from "@utils/api-service";
import getQueryClient from "@utils/react-query/getQueryClient";
import Hydrate from "@utils/react-query/hydrate.client";

import NotionArticles from "./NotionArticles";

type IProps = {
  params: NextParamsType;
  searchParams: NextSearchParamsType;
};

export const generateMetadata: (args: IProps) => Metadata = ({ params }) => {
  return {
    title: {
      absolute: `@Articles | ${params.article}`,
    },
  };
};

const getRecords = async (tag: string) => {
  const records = await notionService.getDBMainByTag(tag);

  return records;
};

const Articles: NextPage<IProps> = async ({ params }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [`hydrate-notion-db-${params.article}`],
    queryFn: () => getRecords(params.article),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <h1 className="font-nunito text-4xl text-center my-[1.5rem] sm:my-[2.5rem] uppercase">
        {params.article} Articles
      </h1>
      <Hydrate state={dehydratedState}>
        <NotionArticles />
      </Hydrate>
    </div>
  );
};

export default Articles;
