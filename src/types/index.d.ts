import { CSSProperties } from "react";
import { Root } from "react-dom/client";

import { Wallet } from "@solana/wallet-adapter-react";
import { TransactionError } from "@solana/web3.js";

declare global {
  interface Window {
    Twamm: TwammTerminal;
  }
}

export type WidgetPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right";

export type WidgetSize = "sm" | "default";

export type DefaultExplorer = "Solana Explorer" | "Solscan" | "Solana Beach" | "SolanaFM";

export interface Init {
  endpoint: string;
  platformFeeAndAccounts?: PlatformFeeAndAccounts;
  formProps?: FormProps;
  strictTokenList?: boolean;
  defaultExplorer?: DefaultExplorer;
  displayMode?: "modal" | "integrated" | "widget";
  integratedTargetId?: string;
  widgetStyle?: {
    position?: WidgetPosition;
    size?: WidgetSize;
  };
  containerStyles?: CSSProperties;
  containerClassName?: string;
  passThroughWallet?: Wallet | null;
  onSwapError?: ({ error }: { error?: TransactionError }) => void;
  onSuccess?: ({ txid }: { txid: string }) => void;
  scriptDomain?: string;
}

export interface TwammTerminal {
  _instance: React.ReactNode;
  init: (props: Init) => void;
  resume: () => void;
  close: () => void;
  root: Root | null;
  passThroughWallet: Init["passThroughWallet"];
  onSwapError: Init["onSwapError"];
  onSuccess: Init["onSuccess"];
}

export interface FormConfigurator {
  fixedInputMint: boolean;
  fixedOutputMint: boolean;
  fixedAmount: boolean;
  initialAmount: string;
  useWalletPassthrough: boolean;
  initialInputMint: string;
  initialOutputMint: string;
  strictTokenList: boolean;
  defaultExplorer: DEFAULT_EXPLORER;
}
