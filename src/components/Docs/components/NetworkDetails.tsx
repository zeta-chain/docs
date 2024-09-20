import { useState } from "react";

const networkDetails: any = {
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

const tabs = [
  { label: "Mainnet Beta", networkType: "mainnet" },
  { label: "Testnet", networkType: "testnet" },
];

const NetworkTable: React.FC<{ networkData: any }> = ({ networkData }) => (
  <div className="overflow-x-auto mt-8">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {networkData.map((item: any, index: number) => (
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
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="mt-8 first:mt-0">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.networkType}
            onClick={() => setActiveTab(tab)}
            className={activeTab.networkType === tab.networkType ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <NetworkTable networkData={networkDetails[activeTab.networkType]} />
    </div>
  );
};
