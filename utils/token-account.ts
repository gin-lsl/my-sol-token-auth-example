/* eslint-disable @typescript-eslint/no-explicit-any */
import createDebug from 'debug';

const debug = createDebug('ms:utils:sign-on');

export async function getTokenAccount(walletAddress: string) {
  debug('getTokenAccount %s %s', walletAddress, process.env.TOKEN_MINT_ADDRESS, process.env.NEXT_PUBLIC_RPC_PROVIDER);

  const response = await fetch(process.env.NEXT_PUBLIC_RPC_PROVIDER!, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'getTokenAccountsByOwner',
      params: [
        walletAddress,
        {
          mint: process.env.TOKEN_MINT_ADDRESS,
        },
        {
          encoding: 'jsonParsed',
          commitment: 'recent',
        },
      ],
    }),
  });

  const result = await response.json() as any;
  debug('getTokenAccount result %O', result);
  const tokenAccountData = (result?.result?.value || [])[0];

  return tokenAccountData?.pubkey as string | undefined;
}


