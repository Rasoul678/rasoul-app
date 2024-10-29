import { z } from "zod";

const envVariables = z.object({
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  GITHUB_ACCESS_TOKEN: z.string(),

  NOTION_TOKEN: z.string(),
  NOTION_DB_ID: z.string(),
  NOTION_UDB_ID: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
