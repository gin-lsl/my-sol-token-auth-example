'use client';

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

function CustomConnectButton(props: ConnectorTriggerProps) {
  return (
    <div className="flex flex-col justify-end items-end gap-2">
      <ConnectButton type="primary" className="px-8" {...props} />
      <Link
        href="./sign-on"
        className="text-xs underline text-gray-500 hover:text-gray-900"
      >
        Sign on &rarr;
      </Link>
    </div>
  );
}

export default function SignButton() {
  const { message } = App.useApp();
  const router = useRouter();

  const onSignIn = async (account?: Account) => {
    if (!account?.address) {
      message.error("Failed to connect wallet");
      return;
    }

    const signResponse = await fetch("/api/sign-in", {
      method: "POST",
      body: JSON.stringify({
        address: account.address,
      }),
    });

    const result = await signResponse.json();

    if (result.success) {
      message.info("Your wallet is signed, you can start now");

      router.push("/");
    } else {
      message.error("Failed to sign in, please sign-on first");
    }
  };

  return (
    <Web3ConfigProvider
      locale={{
        ConnectButton: {
          connect: "Continue with Solana",
        },
      }}
    >
      <Connector
        onConnected={(account) => {
          onSignIn(account);
        }}
      >
        <CustomConnectButton />
      </Connector>
    </Web3ConfigProvider>
  );
}
