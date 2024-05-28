import { useState } from "react";

import { NetworkType } from "~/lib/app.types";

type NetworkData = Array<{ name: string; value: string }>;

// Static data for the tables
const networkDetails: Record<NetworkType, NetworkData> = {
  testnet: [
    { name: "Chain ID (EVM)", value: "7001" },
    { name: "Chain ID (Cosmos)", value: "athens_7001-1" },
    { name: "Denom", value: "azeta" },
    { name: "Symbol", value: "tZETA" },
    { name: "Decimals", value: "18" },
    { name: "HD Path", value: "m/44'/60'/0'/0/0" },
    { name: "Bech32 prefix", value: "zeta" },
    { name: "Explorer", value: "https://athens.explorer.zetachain.com" },
    {
      name: "EVM RPC",
      value: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public",
    },
  ],
  mainnet: [
    { name: "Chain ID (EVM)", value: "7000" },
    { name: "Chain ID (Cosmos)", value: "zetachain_7000-1" },
    { name: "Denom", value: "azeta" },
    { name: "Symbol", value: "ZETA" },
    { name: "Decimals", value: "18" },
    { name: "HD Path", value: "m/44'/60'/0'/0/0" },
    { name: "Bech32 prefix", value: "zeta" },
    { name: "Explorer", value: "https://explorer.zetachain.com" },
    {
      name: "EVM RPC",
      value: "https://zetachain-evm.blockpi.network/v1/rpc/public",
    },
  ],
};

// Styles for active and inactive tabs
const activeStyles = { fontWeight: "bold", textDecoration: "underline" };
const inactiveStyles = { fontWeight: "normal", textDecoration: "none" };

const NetworkTable: React.FC<{ networkData: NetworkData }> = ({ networkData }) => (
  <div className="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {networkData.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const NetworkDetails = () => {
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  return (
    <div className="mt-6">
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? activeStyles : inactiveStyles}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? activeStyles : inactiveStyles}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>

      <NetworkTable networkData={networkDetails[activeTab]} />
    </div>
  );
};
