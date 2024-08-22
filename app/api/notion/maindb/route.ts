import { notionService } from "@utils/api-service";

export const GET = async () => {
  try {
    const records = await notionService.getDBMain();

    return new Response(JSON.stringify({ ...records }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};
