import { useEffect, useMemo, useState } from "react";

type NetworkType = "mainnet" | "testnet";

const API: any = {
  mainnet: "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/v1/data/addresses.mainnet.json",
  testnet: "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/v1/data/addresses.testnet.json",
};

type AddressData = {
  address: string;
  category: string;
  chain_id: string;
  chain_name: string;
  type: string;
}[];

export const ZetaTokenTable: any = () => {
  const tabs = [
    { label: "Mainnet Beta", networkType: "mainnet" },
    { label: "Testnet", networkType: "testnet" },
  ];

  const [mainnetZetaTokens, setMainnetZetaTokens] = useState<AddressData>([]);
  const [testnetZetaTokens, setTestnetZetaTokens] = useState<AddressData>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(API[activeTab.networkType]);
        const data: AddressData = await response.json();

        const zetaTokenContracts = data.filter((item) => item.type === "zetaToken");

        if (activeTab.networkType === "mainnet") setMainnetZetaTokens(zetaTokenContracts);
        if (activeTab.networkType === "testnet") setTestnetZetaTokens(zetaTokenContracts);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (activeTab.networkType === "mainnet") setMainnetZetaTokens([]);
        if (activeTab.networkType === "testnet") setTestnetZetaTokens([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab.networkType]);

  const zetaTokens = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetZetaTokens : testnetZetaTokens;
  }, [activeTab.networkType, mainnetZetaTokens, testnetZetaTokens]);

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

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>
              <tr>
                <th>Chain Name</th>
                <th>Chain ID</th>
                <th>Address</th>
              </tr>
            </thead>

            <tbody>
              {zetaTokens.map((token, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                  <td>{token.chain_name}</td>
                  <td>{token.chain_id}</td>
                  <td>{token.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-4">
        Source:{" "}
        <a
          href={API[activeTab.networkType]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A5C6] dark:text-[#B0FF61]"
        >
          {API[activeTab.networkType]}
        </a>
      </p>
    </div>
  );
};
