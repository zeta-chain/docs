import React, { useState } from "react";

// Static data for the tables
const networkDetails = {
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

const NetworkDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("testnet");

  // Styles for active and inactive tabs
  const active = { fontWeight: "bold", textDecoration: "underline" };
  const inactive = { fontWeight: "normal", textDecoration: "none" };

  // Helper function to render a table for the active network
  const renderTable = (networkData) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {networkData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={activeTab === "testnet" ? active : inactive}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={activeTab === "mainnet" ? active : inactive}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>
      {activeTab === "testnet" && renderTable(networkDetails.testnet)}
      {activeTab === "mainnet" && renderTable(networkDetails.mainnet)}
    </div>
  );
};

export default NetworkDetailsTabs;
