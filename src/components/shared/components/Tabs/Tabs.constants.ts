import { NetworkType } from "~/lib/app.types";

export const networkTypeTabs: {
  label: string;
  networkType: NetworkType;
}[] = [
  { label: "Testnet", networkType: "testnet" },
  { label: "Mainnet Beta", networkType: "mainnet" },
];

export const rpcByNetworkType: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
};
