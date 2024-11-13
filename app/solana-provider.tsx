'use client';

import React from "react";
import { SolanaWeb3ConfigProvider } from "@ant-design/web3-solana";

export default function SolanaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SolanaWeb3ConfigProvider
      autoAddRegisteredWallets
      autoConnect
      rpcProvider={() => process.env.NEXT_PUBLIC_RPC_PROVIDER!}
    >
      {children}
    </SolanaWeb3ConfigProvider>
  );
}
