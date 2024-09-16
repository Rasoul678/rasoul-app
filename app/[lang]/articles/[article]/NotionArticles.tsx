"use client";

import React from "react";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { useParams, useRouter } from "next/navigation";

import ClassicCard from "@components/Cards/Classic";
import { iconsList } from "@components/icons";
import {
  MainDBPropertiesType,
  NextParamsType,
  NotionDBResultsType,
} from "@types";
import { clientService } from "@utils/api-service";

import { articlesList } from "@utils/constants";

type IProps = {};
type MainDBResultsType = NotionDBResultsType<MainDBPropertiesType>;

const NotionArticles: React.FC<IProps> = () => {
  const params = useParams<NextParamsType>();
  const router = useRouter();

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
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center justify-center gap-1 rounded-full text-black bg-[#FFE082] p-1"
        >
          {iconsList.restart()}
        </button>
        <div className="font-nunito p-4 text-3xl h-full flex justify-center items-center text-center">
          Sorry! This article is not my strong suit.
        </div>
        <span className="text-[5rem]">{iconsList.dino({ width: 100 })}</span>
      </div>
    );
  }

  return (
    <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 p-4 fade-out-anim">
      {records?.results?.map((article) => {
        return (
          <ClassicCard
            key={article.id}
            properties={(article as MainDBResultsType).properties}
          />
        );
      })}
    </div>
  );
};

export default NotionArticles;
