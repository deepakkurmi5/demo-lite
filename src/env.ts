export const ankrClusterApiUrl = "https://rpc.ankr.com/solana";

export const clusterApiUrl = process.env.NEXT_PUBLIC_CLUSTER_API_URL;

export const programId: string | undefined = process.env.NEXT_PUBLIC_PROGRAM_ADDRESS;

export const feeAccount = "9pvCGNF2aw43Smb4J1pdyobq6PnjwkhXkuFov8P42S5w";

export const feeBps = 30;

export const platformFeeAccount: string = "9pvCGNF2aw43Smb4J1pdyobq6PnjwkhXkuFov8P42S5w";

export const JUPITER_CONFIG_URI = "https://quote-api.jup.ag";

export const JUPITER_PRICE_ENDPOINT_V4 = "https://price.jup.ag/v4/price";

export const NEXT_PUBLIC_ENABLE_TX_SIMUL = process.env.NEXT_PUBLIC_ENABLE_TX_SIMUL || "";

export const NEXT_PUBLIC_SUPPORTED_TOKEN = process.env.NEXT_PUBLIC_SUPPORTED_TOKEN || "";
