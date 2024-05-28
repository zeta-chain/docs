import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

type ForeignCoin = {
  symbol: string;
  coin_type: string;
  decimals: number;
  zrc20_contract_address: string;
  foreign_chain_id: string;
  asset: string;
};

type CoinsData = {
  foreignCoins: ForeignCoin[];
};

type ChainsData = {
  chains: {
    chain_id: string;
    chain_name: string;
  }[];
};

const API: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
};

const COINS = "/zeta-chain/fungible/foreign_coins";
const CHAINS = "/zeta-chain/observer/supportedChains";

const activeStyles = { fontWeight: "bold", textDecoration: "underline" };

const formatString = (str: string) => {
  return str
    .split("_")
    .map((word: string) =>
      word.length <= 3 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

export const ForeignCoinsTable = () => {
  const [coins, setCoins] = useState<(ForeignCoin & { chainName: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  useEffect(() => {
    setIsLoading(true);
    setCoins([]);
    const fetchData = async () => {
      try {
        const COINS_URL = `${API[activeTab]}${COINS}`;
        const CHAINS_URL = `${API[activeTab]}${CHAINS}`;

        const responseCoins = await fetch(COINS_URL);
        const coinsData: CoinsData = await responseCoins.json();

        const responseChains = await fetch(CHAINS_URL);
        const chainsData: ChainsData = await responseChains.json();

        const chainIdToName = chainsData.chains.reduce((acc, chain) => {
          acc[chain.chain_id] = formatString(chain.chain_name);
          return acc;
        }, {} as Record<string, string>);

        const enrichedCoins = coinsData.foreignCoins.map((coin) => ({
          ...coin,
          chainName: chainIdToName[coin.foreign_chain_id] || "Unknown",
        }));

        const sortedCoins = enrichedCoins.sort((a, b) => a.chainName.localeCompare(b.chainName));
        setCoins(sortedCoins);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className="mt-6">
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? activeStyles : {}}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? activeStyles : {}}
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
                <th>Chain</th>
                <th>Symbol</th>
                <th>Type</th>
                <th>ZRC-20 decimals</th>
                <th>ZRC-20 on ZetaChain</th>
                <th>ERC-20 on Connected Chain</th>
              </tr>
            </thead>

            <tbody>
              {coins.map((coin, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                  <td>{coin.chainName}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.coin_type}</td>
                  <td>{coin.decimals}</td>
                  <td>{coin.zrc20_contract_address}</td>
                  <td>{coin.asset}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="my-4">
        Source:{" "}
        <a href={`${API[activeTab]}${COINS}`} target="_blank" rel="noopener noreferrer" className="text-green-100">
          {API[activeTab]}
          {COINS}
        </a>
      </p>
    </div>
  );
};

export default ForeignCoinsTable;
