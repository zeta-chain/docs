import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

type ChainData = {
  chains: {
    chain_id: string;
    chain_name: string;
  }[];
};

type ParamsData = {
  chain_params: {
    chain_params: {
      chain_id: string;
      confirmation_count: string;
    }[];
  };
};

type ChainParams = {
  chainName: string;
  confirmation_count: string;
}[];

const API: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
};

const CHAIN_PARAMS = "/zeta-chain/observer/get_chain_params";
const SUPPORTED_CHAINS = "/zeta-chain/observer/supportedChains";

export const ChainConfirmations = () => {
  const [chainParams, setChainParams] = useState<ChainParams>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const paramsUrl = `${API[activeTab]}${CHAIN_PARAMS}`;
        const chainsUrl = `${API[activeTab]}${SUPPORTED_CHAINS}`;

        // Fetch supported chains first
        const responseChains = await fetch(chainsUrl);
        const chainsData: ChainData = await responseChains.json();

        const newSupportedChainIds = new Set(chainsData.chains.map((chain) => chain.chain_id));

        // Fetch chain parameters
        const responseParams = await fetch(paramsUrl);
        const paramsData: ParamsData = await responseParams.json();

        // Filter out unsupported chains and chains with ID 7000 or 7001
        const filteredParams = paramsData.chain_params.chain_params
          .filter((param) => newSupportedChainIds.has(param.chain_id) && !["7000", "7001"].includes(param.chain_id))
          .map((param) => ({
            ...param,
            chainName: chainsData.chains.find((chain) => chain.chain_id === param.chain_id)?.chain_name || "Unknown",
          }));

        setChainParams(filteredParams);
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
    <div className="mt-8">
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
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Chain Name</th>
                <th>Confirmation Count</th>
              </tr>
            </thead>
            <tbody>
              {chainParams.map((param, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                  <td>{param.chainName}</td>
                  <td>{param.confirmation_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
