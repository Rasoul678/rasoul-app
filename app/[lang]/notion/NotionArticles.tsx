"use client";

import { useQuery } from "@tanstack/react-query";
import {
  MainDBPropertiesType,
  NotionDBResultsType,
  NotionRespondType,
} from "@types";
import { clientService } from "@utils/api-service";
import Image from "next/image";
import React from "react";
import ProfilePic from "@assets/icon-pack/icons8-anonymous-mask-420.svg";
import VirtualizedGrid from "@components/virtualized-grid";
import ClassicCard from "@components/Cards/Classic";

interface IProps {}
type MainDBResultsType = NotionDBResultsType<MainDBPropertiesType>;
type QueryResultType = NotionRespondType<MainDBResultsType>;

const NotionArticles: React.FC<IProps> = (props) => {
  //! Fetch DB records on the client
  const { data: records } = useQuery<QueryResultType>({
    queryKey: ["hydrate-notion-db"],
    queryFn: () => clientService.getDBRecords(),
  });

  console.log(records);

  return (
    <div className="h-screen w-full">
      {records && (
        <div className="h-full">
          <VirtualizedGrid<MainDBResultsType>
            data={records?.results}
            columnCount={4}
            rowHeight={400}
          >
            {({ columnIndex, data, rowIndex, style }) => {
              const article = data.allData?.[rowIndex]?.[
                columnIndex
              ] as MainDBResultsType;

              if (article) {
                return (
                  <div style={style} className="flex justify-center">
                    {/* <Image
                      key={article.id}
                      width={300}
                      height={300}
                      src={
                        article?.properties?.Data.files[0]?.file?.url ||
                        ProfilePic
                      }
                      alt={article.id}
                    /> */}
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
