import { Client } from "@notionhq/client";

type UserByRolleArgsType = { rolle?: "Admin" | "User" };

//! Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

class NotionService {
  public getNotionUser = async () => {
    return await notion.users.list({});
  };

  public getDBMain = async () => {
    return await notion.databases.query({
      database_id: process.env.NOTION_DB_ID,
    });
  };

  public getDBMainByTag = async (tag?: string) => {
    return await notion.databases.query({
      database_id: process.env.NOTION_DB_ID,
      filter: {
        property: "Tags",
        multi_select: {
          contains: tag || "",
        },
      },
    });
  };

  public getDBUserByRolle = async (args?: UserByRolleArgsType) => {
    return await notion.databases.query({
      database_id: process.env.NOTION_UDB_ID,
      filter: {
        property: "Rolle",
        select: {
          equals: args?.rolle || "Admin",
        },
      },
    });
  };
}

export const notionService = new NotionService();
