import { NextApiRequest } from "next";

import { notionService } from "@utils/api-service";

export const GET = async (
  _req: NextApiRequest,
  { params }: { params: { article: string } }
) => {
  try {
    const records = await notionService.getDBMainByTag(params.article);

    return new Response(JSON.stringify({ ...records }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};
