"use client";

import {
  Account,
  ConnectButton,
  Connector,
  ConnectorTriggerProps,
  Web3ConfigProvider,
} from "@ant-design/web3";
import { App } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CustomConnectButtonProps extends ConnectorTriggerProps {
  onMint: (account?: Account) => void;
}

export function CustomConnectButton(props: CustomConnectButtonProps) {
  return (
    <div className="flex flex-col justify-end items-end gap-2">
      <ConnectButton type="primary" className="px-8" {...props} />
      {props.account ? (
        <span
          className="text-xs underline text-gray-500 hover:text-gray-900 cursor-pointer"
          onClick={() => props.onMint(props.account)}
        >
          Mint to start
        </span>
      ) : (
        <Link
          href="./sign-in"
          className="text-xs underline text-gray-500 hover:text-gray-900"
        >
          Sign in &rarr;
        </Link>
      )}
    </div>
  );
}

export default function SignButton() {
  const { message } = App.useApp();
  const router = useRouter();

  const onSignOn = async (account?: Account) => {
    if (!account?.address) {
      message.error("Failed to connect wallet");
      return;
    }

    const signResponse = await fetch("/api/sign-on", {
      method: "POST",
      body: JSON.stringify({
        address: account.address,
      }),
    });

    const result = await signResponse.json();

    if (result.success) {
      if (result.data.minted) {
        message.info("Your wallet is minted, you can start now");
      } else {
        message.info("Mint successfully");
      }

      router.push("/");
    } else {
      message.error("Failed to mint");
    }
  };

  return (
    <Web3ConfigProvider
      locale={{
        ConnectButton: {
          connect: "Start with Solana",
        },
      }}
    >
      <Connector
        onConnected={(account) => {
          onSignOn(account);
        }}
      >
        <CustomConnectButton onMint={onSignOn} />
      </Connector>
    </Web3ConfigProvider>
  );
}
