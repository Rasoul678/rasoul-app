import { dehydrate } from "@tanstack/react-query";
import { notionService } from "@utils/api-service";
import getQueryClient from "@utils/react-query/getQueryClient";
import React from "react";
import Hydrate from "@utils/react-query/hydrate.client";
import NotionArticles from "./NotionArticles";

interface IProps {}

const getRecords = async () => {
  const records = await notionService.getDBMain();

  return records;
};

const Notion: React.FC<IProps> = async (props) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hydrate-notion-db"],
    queryFn: getRecords,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <Hydrate state={dehydratedState}>
        <NotionArticles />
      </Hydrate>
      {/* <iframe
        width="100%"
        className="h-screen"
        src="https://e.notionhero.io/e1/p/06df35f-c0e64afdb9798c335405928d37dd21b"
      ></iframe> */}
    </div>
  );
};

export default Notion;
