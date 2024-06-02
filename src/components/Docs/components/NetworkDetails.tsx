import { useState } from "react";

import { NavTabs, networkTypeTabs } from "~/components/shared";
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

const NetworkTable: React.FC<{ networkData: NetworkData }> = ({ networkData }) => (
  <div className="overflow-x-auto mt-8">
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
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  return (
    <div className="mt-8">
      <NavTabs tabs={networkTypeTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <NetworkTable networkData={networkDetails[activeTab.networkType]} />
    </div>
  );
};
