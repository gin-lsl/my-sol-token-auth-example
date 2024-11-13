/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from "next/server";

import { createAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { getTokenAccount } from "@/utils/token-account";
import createDebug from 'debug';

const debug = createDebug('ms:api:sign-on');

export async function POST(req: NextRequest) {
  const body = await req.json() as { address: string };
  debug('POST /sign-on %O', body);

  if (!body.address) {
    return Response.json({
      success: false,
      error: 'Invalid address',
    });
  }

  const destTokenAccount = await getTokenAccount(body.address);

  debug('destTokenAccount (%O)', destTokenAccount);

  if (destTokenAccount) {
    return Response.json({
      success: true,
      data: { minted: true }
    });
  }

  const connection = new Connection(process.env.NEXT_PUBLIC_RPC_PROVIDER!);

  const payerKeypair = Keypair.fromSecretKey(Buffer.from(JSON.parse(process.env.MINT_TOKEN_KEYPAIR!), 'base64'));

  // create Token Account
  const tokenAccountPubkey = await createAssociatedTokenAccount(connection, payerKeypair, new PublicKey(process.env.TOKEN_MINT_ADDRESS!), new PublicKey(body.address));

  debug('tokenAccountPubkey (%s)', tokenAccountPubkey.toString());

  // mint token
  const txSignature = await mintTo(
    connection,
    payerKeypair,
    new PublicKey(process.env.TOKEN_MINT_ADDRESS!),
    tokenAccountPubkey,
    new PublicKey(process.env.MINT_AUTHORITY_ADDRESS!),
    1,
  );

  debug('mint tx signature (%s)', txSignature);

  return Response.json({
    success: true,
    data: {
      minted: true,
      signature: txSignature,
    }
  });
}
