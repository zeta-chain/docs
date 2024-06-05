import { NetworkType } from "~/lib/app.types";

export const networkTypeTabs: {
  label: string;
  networkType: NetworkType;
}[] = [
  { label: "Mainnet Beta", networkType: "mainnet" },
  { label: "Testnet", networkType: "testnet" },
];

export const rpcByNetworkType: Record<NetworkType, string> = {
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
};
