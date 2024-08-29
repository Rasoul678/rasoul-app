import { dehydrate } from "@tanstack/react-query";

import { Metadata, NextPage } from "next";

import { NextParamsType, NextSearchParamsType } from "@types";
import { notionService } from "@utils/api-service";
import { articlesList } from "@utils/constants";
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

  const ArticleNotExist = !articlesList.includes(params.article);

  return (
    <div>
      <h1 className="font-my_exo2 text-3xl text-center my-[1.5rem] sm:my-[2.5rem] uppercase">
        <span
          className={`${ArticleNotExist ? "text-red-500" : "text-cyan-400"}`}
        >
          {params.article}
        </span>{" "}
        Articles
      </h1>
      <Hydrate state={dehydratedState}>
        <NotionArticles />
      </Hydrate>
    </div>
  );
};

export default Articles;
