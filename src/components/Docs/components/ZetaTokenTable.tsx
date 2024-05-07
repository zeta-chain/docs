import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

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
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  useEffect(() => {
    setIsLoading(true);
    setZetaTokens([]);
    const fetchData = async () => {
      try {
        const response = await fetch(API[activeTab]);
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
  }, [activeTab]);

  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
  const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

  return (
    <div className="mt-6">
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
        <div className="overflow-auto">
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
        <a href={API[activeTab]} target="_blank" rel="noopener noreferrer" className="text-green-100">
          {API[activeTab]}
        </a>
      </p>
    </div>
  );
};
