import { useEffect, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";
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

export const ContractAddresses = () => {
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
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
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <LoadingTable rowCount={12} />
      ) : (
        Object.entries(groupedData[activeTab.networkType]).map(([chainName, contracts]) => (
          <div key={chainName}>
            <h3 className="text-xl mt-8 font-medium">{chainName}</h3>

            <div className="overflow-x-auto mt-8">
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
        <a
          href={addressesUrl[activeTab.networkType]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A5C6] dark:text-[#B0FF61]"
        >
          {addressesUrl[activeTab.networkType]}
        </a>
      </p>
    </div>
  );
};
