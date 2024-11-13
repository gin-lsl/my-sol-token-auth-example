"use client";

import { Address, useAccount, useConnection } from "@ant-design/web3";
import { Popconfirm } from "antd";
import Link from "next/link";

export function CurrentAccount() {
  const { account } = useAccount();
  const { disconnect } = useConnection();

  return (
    <div className="flex flex-col items-end gap-1">
      <Address className="text-xs" address={account?.address} tooltip={false} />
      {account ? (
        <Popconfirm
          title="Are your sure?"
          okButtonProps={{ className: "text-xs py-0", variant: "text" }}
          cancelButtonProps={{ className: "text-xs py-0", type: "text" }}
          onConfirm={() => {
            disconnect?.();
          }}
        >
          <span className="text-xs cursor-pointer hover:underline">
            Disconnect
          </span>
        </Popconfirm>
      ) : (
        <Link href="/sign-in" className="text-xs underline hover:text-gray-500">Sign in</Link>
      )}
    </div>
  );
}

