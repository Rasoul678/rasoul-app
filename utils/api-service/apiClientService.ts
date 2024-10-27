import {
  ListUsersResponse,
  PersonUserObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { DBUserPropertiesType } from "@types";

class APIClientSide {
  public getNotionAuthUser = async (isTest: boolean = false) => {
    // TODO: How to go around this problem?
    let endPoint = isTest ? "http://localhost:3000/api/notion" : "/api/notion";
    const response = await fetch(endPoint);
    const users: ListUsersResponse = await response.json();
    return users.results[0] as PersonUserObjectResponse;
  };

  public getDBUser = async () => {
    const response = await fetch("/api/notion/userdb");
    const user: DBUserPropertiesType = await response.json();
    return user;
  };

  public getDBRecords = async () => {
    const response = await fetch("/api/notion/maindb");
    const records: QueryDatabaseResponse = await response.json();
    return records;
  };

  public getDBRecByTag = async (tag?: string) => {
    const response = await fetch(`/api/notion/maindb/${tag}`);
    const records: QueryDatabaseResponse = await response.json();
    return records;
  };
}

export const clientService = new APIClientSide();
