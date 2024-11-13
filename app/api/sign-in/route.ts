import { getTokenAccount } from "@/utils/token-account";
import { NextRequest } from "next/server";

import createDebug from 'debug';

const debug = createDebug('ms:api:sign-on');

export async function POST(req: NextRequest) {
  const body = await req.json() as { address: string };
  debug('POST /sign-in %o', body);

  if (!body.address) {
    return Response.json({
      success: false,
      error: 'Invalid address',
    });
  }

  const tokenAccountPublic = await getTokenAccount(body.address);

  return Response.json({
    success: !!tokenAccountPublic,
  });
}
