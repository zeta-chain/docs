import { NetworkType } from "~/lib/app.types";

export type Tab = {
  label: string;
};

export type NetworkTypeTab = Tab & {
  networkType: NetworkType;
};

export const networkTypeTabs: NetworkTypeTab[] = [
  { label: "Mainnet Beta", networkType: "mainnet" },
  { label: "Testnet", networkType: "testnet" },
];

export const rpcByNetworkType: Record<NetworkType, string> = {
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
};

export const lsSelectedNetworkType = "zetaDocs.networkType";
