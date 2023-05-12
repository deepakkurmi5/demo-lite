import React, { useEffect } from "react";
import { Wallet } from "@solana/wallet-adapter-react";

export default function ModalTerminal({ rpcUrl, fakeWallet }: { rpcUrl: string | undefined; fakeWallet: Wallet | null }) {
  useEffect(() => {}, [rpcUrl, fakeWallet]);

  return <div>ModalTerminal</div>;
}
