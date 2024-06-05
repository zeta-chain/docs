import { useEffect, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";
import { NetworkType } from "~/lib/app.types";

const API: Record<NetworkType, string> = {
  mainnet: "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.mainnet.json",
  testnet: "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.testnet.json",
};

type AddressData = {
  address: string;
  category: string;
  chain_id: string;
  chain_name: string;
  type: string;
}[];

export const ZetaTokenTable = () => {
  const [zetaTokens, setZetaTokens] = useState<AddressData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    setIsLoading(true);
    setZetaTokens([]);
    const fetchData = async () => {
      try {
        const response = await fetch(API[activeTab.networkType]);
        const data: AddressData = await response.json();

        const zetaTokenContracts = data.filter((item) => item.type === "zetaToken");

        setZetaTokens(zetaTokenContracts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab.networkType]);

  return (
    <div className="mt-8">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <LoadingTable rowCount={4} />
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
