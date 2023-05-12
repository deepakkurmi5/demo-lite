import React, { useEffect } from "react";
import { Wallet } from "@solana/wallet-adapter-react";

export default function WidgetTerminal({ rpcUrl, fakeWallet }: { rpcUrl: string | undefined; fakeWallet: Wallet | null }) {
  useEffect(() => {}, [rpcUrl, fakeWallet]);

  return <div>WidgetTerminal</div>;
}
