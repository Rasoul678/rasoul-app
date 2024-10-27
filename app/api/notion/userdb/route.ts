import { DBUser } from "@types";
import { notionService } from "@utils/api-service";

export const GET = async () => {
  try {
    let user = null;

    const db_users = await notionService.getDBUserByRolle();

    if (db_users) {
      user = (db_users.results[0] as DBUser).properties;
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};
