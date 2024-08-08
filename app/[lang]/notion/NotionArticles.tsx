"use client";

import { useQuery } from "@tanstack/react-query";
import {
  MainDBPropertiesType,
  NotionDBResultsType,
  NotionRespondType,
} from "@types";
import { clientService } from "@utils/api-service";
import React from "react";
import ProfilePic from "@assets/icon-pack/icons8-anonymous-mask-420.svg";
import VirtualizedGrid from "@components/virtualized-grid";
import ClassicCard from "@components/Cards/Classic";
import { useElementSize } from "@hooks/useElementSize";

interface IProps {}
type MainDBResultsType = NotionDBResultsType<MainDBPropertiesType>;
type QueryResultType = NotionRespondType<MainDBResultsType>;

const NotionArticles: React.FC<IProps> = (props) => {
  //! Fetch DB records on the client
  const { data: records } = useQuery<QueryResultType>({
    queryKey: ["hydrate-notion-db"],
    queryFn: () => clientService.getDBRecords(),
  });

  const [windowState] = useElementSize();

  if (windowState.status === "unsupported") {
    return <div>It is probably server side rendering...</div>;
  }

  if (windowState.status === "undetected") {
    return (
      <div className="font-nunito text-2xl h-screen flex justify-center align-middle">
        Preparing...
      </div>
    );
  }

  const columnCount = (): number => {
    if (windowState.width < 460) {
      return 1;
    }

    if (windowState.width < 860 && windowState.width > 460) {
      return 2;
    }

    if (windowState.width > 860 && windowState.width < 1100) {
      return 3;
    }

    return 4;
  };

  console.log(records);
  return (
    <div className="h-screen w-full">
      {records && (
        <div className="h-full">
          <VirtualizedGrid<MainDBResultsType>
            data={records?.results}
            columnCount={columnCount()}
            rowHeight={350}
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
