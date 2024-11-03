"use client";

import React, { useContext } from "react";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { useParams, useRouter } from "next/navigation";

import ClassicCard from "@components/Cards/Classic";
import { iconsList } from "@components/icons";
import { UserContext } from "@components/user-provider";
import {
  MainDBPropertiesType,
  NextParamsType,
  NotionDBResultsType,
} from "@types";
import { clientService } from "@utils/api-service";

type IProps = {};
type MainDBResultsType = NotionDBResultsType<MainDBPropertiesType>;

const NotionArticles: React.FC<IProps> = () => {
  const params = useParams<NextParamsType>();
  const router = useRouter();
  const { user } = useContext(UserContext);

  const ArticleNotExists = !user.articles_list
    .map((arc) => arc.name)
    .includes(params.article);

  //! Fetch DB records on the client
  const { data: records, isLoading } = useQuery({
    queryKey: [`hydrate-notion-db-${params.article}`],
    queryFn: () => clientService.getDBRecByTag(params.article),
    placeholderData: keepPreviousData,
    enabled: !ArticleNotExists,
  });

  if (isLoading) {
    return (
      <div className="font-nunito text-3xl h-screen flex justify-center items-center">
        Preparing articles...
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-my_exo2 text-3xl text-center my-[1.5rem] sm:my-[2.5rem] uppercase">
        <span
          className={`${ArticleNotExists ? "text-red-500" : "text-cyan-400"}`}
        >
          {params.article}
        </span>{" "}
        Articles
      </h1>
      {ArticleNotExists && (
        <div className="flex flex-col justify-center items-center">
          <div className="font-nunito p-4 text-3xl h-full flex justify-center items-center text-center">
            Sorry! This topic is not my strong suit.
          </div>
          <button className="text-[5rem]" onClick={() => router.back()}>
            {iconsList.dino({ width: 100, alt: "go back dino!" })}
          </button>
        </div>
      )}
      <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 p-4 fade-out-anim">
        {records?.results?.map((arc) => {
          return (
            <ClassicCard
              key={arc.id}
              properties={(arc as MainDBResultsType).properties}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotionArticles;
