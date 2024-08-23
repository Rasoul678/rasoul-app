"use client";

import React from "react";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";

import ProfilePic from "@assets/icon-pack/icons8-anonymous-mask-420.svg";
import ClassicCard from "@components/Cards/Classic";
import VirtualizedGrid from "@components/virtualized-grid";
import {
  MainDBPropertiesType,
  NextParamsType,
  NotionDBResultsType,
} from "@types";
import { clientService } from "@utils/api-service";

import { articlesList } from "@utils/constants";

import { useColumnCount } from "./useColumnCount";

interface IProps {}
type MainDBResultsType = NotionDBResultsType<MainDBPropertiesType>;

const NotionArticles: React.FC<IProps> = (props) => {
  const params = useParams<NextParamsType>();

  //! Fetch DB records on the client
  const { data: records } = useQuery({
    queryKey: [`hydrate-notion-db-${params.article}`],
    queryFn: () => clientService.getDBRecByTag(params.article),
    placeholderData: keepPreviousData,
  });

  const { columnCount, windowState: _s } = useColumnCount();

  if (columnCount === -1) {
    return <div>It is probably server side rendering...</div>;
  }

  if (columnCount === 0) {
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
          Sorry! Your ordered article is not my strong suit.
        </div>
        <span className="text-[5rem]">🥺</span>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      {records && (
        <div className="h-full">
          <VirtualizedGrid
            data={records?.results}
            columnCount={columnCount}
            rowHeight={270}
          >
            {({ columnIndex, data, rowIndex, style }) => {
              const article = data.allData?.[rowIndex]?.[
                columnIndex
              ] as MainDBResultsType;

              if (article) {
                return (
                  <div style={style} className="flex justify-center">
                    <ClassicCard
                      src={
                        article?.properties?.Data.files[0]?.file?.url ||
                        ProfilePic
                      }
                      author={article.properties.Author.people[0].name}
                      title={article.properties.Title.title[0].text.content}
                      description={
                        article.properties.Text.rich_text[0]?.text.content
                      }
                      icon={article.icon?.external?.url}
                    />
                  </div>
                );
              }
            }}
          </VirtualizedGrid>
        </div>
      )}
    </div>
  );
};

export default NotionArticles;
