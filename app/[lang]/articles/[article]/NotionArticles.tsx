"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";

import ProfilePic from "@assets/icon-pack/icons8-anonymous-mask-420.svg";
import ClassicCard from "@components/Cards/Classic";
import VirtualizedGrid from "@components/virtualized-grid";
import { useElementSize } from "@hooks/useElementSize";
import { MainDBPropertiesType, NotionDBResultsType } from "@types";
import { clientService } from "@utils/api-service";
import { useParams } from "next/navigation";

interface IProps {}
type MainDBResultsType = NotionDBResultsType<MainDBPropertiesType>;

const NotionArticles: React.FC<IProps> = (props) => {
  const params = useParams<{ article: string }>();

  //! Fetch DB records on the client
  const { data: records } = useQuery({
    queryKey: [`hydrate-notion-db-${params.article}`],
    queryFn: () => clientService.getDBRecByTag(params.article),
  });

  const [windowState] = useElementSize();

  if (windowState.status === "unsupported") {
    return <div>It is probably server side rendering...</div>;
  }

  if (windowState.status === "undetected") {
    return (
      <div className="font-nunito text-2xl h-screen flex justify-center align-middle">
        Preparing articles...
      </div>
    );
  }

  const columnCount = (): number => {
    if (windowState.width < 520) {
      return 2;
    }

    if (windowState.width < 860 && windowState.width > 520) {
      return 3;
    }

    if (windowState.width > 860 && windowState.width < 1100) {
      return 4;
    }

    return 5;
  };

  return (
    <div className="h-screen w-full">
      {records && (
        <div className="h-full">
          <VirtualizedGrid
            data={records?.results}
            columnCount={columnCount()}
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
