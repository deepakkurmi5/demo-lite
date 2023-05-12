import React, { useEffect } from "react";
import { Wallet } from "@solana/wallet-adapter-react";

export default function IntegratedTerminal({ rpcUrl, fakeWallet }: { rpcUrl: string | undefined; fakeWallet: Wallet | null }) {
  useEffect(() => {}, [rpcUrl, fakeWallet]);

  return <div>IntegratedTerminal</div>;
}
