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
        and: [
          {
            property: "Tags",
            multi_select: {
              contains: tag || "",
            },
          },
          {
            property: "Status",
            status: {
              equals: "Erledigt",
            },
          },
        ],
      },
    });
  };

  public getDBUserByRolle = async (args?: UserByRolleArgsType) => {
    let db_response;

    try {
      db_response = await notion.databases.query({
        database_id: process.env.NOTION_UDB_ID,
        filter: {
          property: "Rolle",
          select: {
            equals: args?.rolle || "Admin",
          },
        },
      });
    } catch (err) {
      db_response = null;
      console.error("Wow! Notion disappointed us!");
    }

    return db_response;
  };
}

export const notionService = new NotionService();
