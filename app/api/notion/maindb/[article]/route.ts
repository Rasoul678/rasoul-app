import { NextRequest } from "next/server";

import { NextParamsType } from "@types";
import { notionService } from "@utils/api-service";

export const GET = async (
  _req: Request | NextRequest,
  { params }: { params: NextParamsType }
) => {
  try {
    const records = await notionService.getDBMainByTag(params.article);

    return new Response(JSON.stringify({ ...records }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};
