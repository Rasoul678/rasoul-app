import { NotionRespondType, NotionUserType } from "@types";

class APIClientSide {
  public getNotionUser = async () => {
    const response = await fetch("/api/notion");
    const users: NotionRespondType<NotionUserType> = await response.json();
    return users.results[0];
  };

  public getDBUser = async () => {
    const response = await fetch("/api/notion/userdb");
    const users: NotionRespondType<NotionUserType> = await response.json();
    return users;
  };

  public getDBRecords = async () => {
    const response = await fetch("/api/notion/maindb");
    const records = await response.json();
    return records;
  };
}

export const clientService = new APIClientSide();
