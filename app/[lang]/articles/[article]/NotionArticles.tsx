"use client";

import React from "react";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

import ClassicCard from "@components/Cards/Classic";
import {
  MainDBPropertiesType,
  NextParamsType,
  NotionDBResultsType,
} from "@types";
import { clientService } from "@utils/api-service";

import { articlesList } from "@utils/constants";

interface IProps {}
type MainDBResultsType = NotionDBResultsType<MainDBPropertiesType>;

const NotionArticles: React.FC<IProps> = (props) => {
  const params = useParams<NextParamsType>();

  //! Fetch DB records on the client
  const { data: records, isLoading } = useQuery({
    queryKey: [`hydrate-notion-db-${params.article}`],
    queryFn: () => clientService.getDBRecByTag(params.article),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return (
      <div className="font-nunito text-3xl h-screen flex justify-center align-middle">
        Preparing articles...
      </div>
    );
  }

  if (!articlesList.includes(params.article)) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="font-nunito p-4 text-3xl h-full flex justify-center items-center text-center">
          Sorry! This article is not my strong suit.
        </div>
        <span className="text-[5rem]">🥺</span>
      </div>
    );
  }

  return (
    <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 p-4 fade-out-anim">
      {records?.results?.map((article) => {
        const {
          properties: { Data, Author, Title, Text },
          icon,
        } = article as MainDBResultsType;
        return (
          <ClassicCard
            key={article.id}
            src={Data.files[0]?.file?.url}
            author={Author.people[0].name}
            title={Title.title[0].text.content}
            description={Text.rich_text[0]?.text.content}
            icon={icon?.external?.url}
          />
        );
      })}
    </div>
  );
};

export default NotionArticles;
