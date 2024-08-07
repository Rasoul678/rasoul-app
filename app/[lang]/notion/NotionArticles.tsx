"use client";

import { useQuery } from "@tanstack/react-query";
import { NotionDBResultsType, NotionRespondType } from "@types";
import { clientService } from "@utils/api-service";
import Image from "next/image";
import React from "react";
import ProfilePic from "@assets/icon-pack/icons8-anonymous-mask-420.svg";
import VirtualizedGrid from "@components/virtualized-grid";

interface IProps {}

type QueryResultType = NotionRespondType<NotionDBResultsType>;

const NotionArticles: React.FC<IProps> = (props) => {
  //! Fetch DB records on the client
  const { data: records } = useQuery<QueryResultType>({
    queryKey: ["hydrate-notion-db"],
    queryFn: () => clientService.getDBRecords(),
  });

  return (
    <div>
      {records && (
        <div className="prompts-wrapper">
          <VirtualizedGrid<NotionDBResultsType>
            data={records?.results}
            columnCount={3}
          >
            {({ columnIndex, data, rowIndex, style }) => {
              const prompt: NotionDBResultsType =
                data.allData?.[rowIndex]?.[columnIndex];
              if (prompt) {
                return (
                  <div style={style}>
                    <Image
                      key={prompt.id}
                      width={250}
                      height={250}
                      src={prompt.cover?.file.url || ProfilePic}
                      alt={prompt.id}
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
