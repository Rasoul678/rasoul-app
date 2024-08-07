import { notionService } from "@utils/api-service";

export const GET = async () => {
  try {
    const user = await notionService.getDBUser();
    
    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};