import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

type ContractAddressData = {
  chain_id: string;
  chain_name: string;
  type: string;
  category: string;
  address: string;
  symbol?: string;
};

type ContractAddressesByChain = Record<string, ContractAddressData[]>;

const addressesUrl: Record<NetworkType, string> = {
  testnet: "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.testnet.json",
  mainnet: "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.mainnet.json",
};

const groupDataByChain = (data: ContractAddressData[]) =>
  data.reduce((acc, item) => {
    (acc[item.chain_name] = acc[item.chain_name] || []).push(item);
    return acc;
  }, {} as ContractAddressesByChain);

const sortGroupedData = (groupedData: ContractAddressesByChain) => {
  Object.keys(groupedData).forEach((chainName) => {
    groupedData[chainName].sort((a, b) => a.type.localeCompare(b.type));
  });
  return groupedData;
};

const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

export const ContractAddresses = () => {
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");
  const [isLoading, setIsLoading] = useState(true);
  const [groupedData, setGroupedData] = useState<Record<NetworkType, ContractAddressesByChain>>({
    testnet: {},
    mainnet: {},
  });

  useEffect(() => {
    const fetchAndGroupAddresses = async () => {
      setIsLoading(true);

      const responses = await Promise.all([fetch(addressesUrl.testnet), fetch(addressesUrl.mainnet)]);
      const [testnetData, mainnetData]: ContractAddressData[][] = await Promise.all(responses.map((res) => res.json()));

      setGroupedData({
        testnet: sortGroupedData(groupDataByChain(testnetData)),
        mainnet: sortGroupedData(groupDataByChain(mainnetData)),
      });

      setIsLoading(false);
    };

    fetchAndGroupAddresses();
  }, []);

  return (
    <div className="mt-4">
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>

      {isLoading ? (
        <Skeleton
          variant="rectangular"
          height={100}
          className="rounded mb-5 last-of-type:mb-0 bg-grey-200 dark:bg-grey-600"
        />
      ) : (
        Object.entries(groupedData[activeTab]).map(([chainName, contracts]) => (
          <div key={chainName}>
            <h3 className="mt-8 mb-2 font-medium">{chainName}</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Symbol</th>
                    <th>Address</th>
                  </tr>
                </thead>

                <tbody>
                  {contracts.map((contract, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr key={index}>
                      <td>{contract.type}</td>
                      <td>{contract.symbol || "-"}</td>
                      <td>{contract.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}

      <p className="mt-4">
        Source:{" "}
        <a href={addressesUrl[activeTab]} target="_blank" rel="noopener noreferrer" className="text-green-100">
          {addressesUrl[activeTab]}
        </a>
      </p>
    </div>
  );
};
