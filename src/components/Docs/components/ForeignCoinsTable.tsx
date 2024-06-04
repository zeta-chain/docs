import { useEffect, useState } from "react";

import { LoadingTable, NavTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

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

const COINS = "/zeta-chain/fungible/foreign_coins";
const CHAINS = "/zeta-chain/observer/supportedChains";

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
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    setIsLoading(true);
    setCoins([]);
    const fetchData = async () => {
      try {
        const COINS_URL = `${rpcByNetworkType[activeTab.networkType]}${COINS}`;
        const CHAINS_URL = `${rpcByNetworkType[activeTab.networkType]}${CHAINS}`;

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
  }, [activeTab.networkType]);

  return (
    <div className="mt-8">
      <NavTabs tabs={networkTypeTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <LoadingTable rowCount={7} />
      ) : (
        <div className="overflow-x-auto mt-8">
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
        <a
          href={`${rpcByNetworkType[activeTab.networkType]}${COINS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A5C6] dark:text-[#B0FF61]"
        >
          {rpcByNetworkType[activeTab.networkType]}
          {COINS}
        </a>
      </p>
    </div>
  );
};

export default ForeignCoinsTable;
