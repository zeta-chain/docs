import { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

// ZetaChain Network IDs
const ZETACHAIN_MAINNET_ID = "7000";
const ZETACHAIN_TESTNET_ID = "7001";

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any }) => Promise<any>;
      on: (event: string, handler: (params: any) => void) => void;
      removeListener: (event: string, handler: (params: any) => void) => void;
    };
  }
}

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
    name: string;
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

const addTokenToMetaMask = async (token: ForeignCoin & { chainName: string }) => {
  if (!window.ethereum) {
    alert("Please install an EVM wallet like MetaMask to use this feature");
    return;
  }

  try {
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: token.zrc20_contract_address,
        },
      },
    });

    if (wasAdded) {
      console.log("Token was added to MetaMask");
    }
  } catch (error) {
    console.error("Error adding token to MetaMask:", error);
  }
};

export const ForeignCoinsTable = () => {
  const [mainnetCoins, setMainnetCoins] = useState<(ForeignCoin & { chainName: string })[]>([]);
  const [testnetCoins, setTestnetCoins] = useState<(ForeignCoin & { chainName: string })[]>([]);
  const [currentChainId, setCurrentChainId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  // Check if the current network matches the active tab
  const isCorrectNetwork = useMemo(() => {
    if (!currentChainId) return false;
    if (activeTab.networkType === "mainnet") {
      return currentChainId === ZETACHAIN_MAINNET_ID;
    }
    return currentChainId === ZETACHAIN_TESTNET_ID;
  }, [currentChainId, activeTab.networkType]);

  // Listen for chain changes
  useEffect(() => {
    const handleChainChanged = (chainId: string) => {
      setCurrentChainId(parseInt(chainId, 16).toString());
    };

    const getCurrentChain = async () => {
      if (window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: "eth_chainId" });
          setCurrentChainId(parseInt(chainId, 16).toString());
        } catch (error) {
          console.error("Error getting chain ID:", error);
        }
      }
    };

    getCurrentChain();

    if (window.ethereum?.on) {
      window.ethereum.on("chainChanged", handleChainChanged);
      return () => {
        window.ethereum?.removeListener?.("chainChanged", handleChainChanged);
      };
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const COINS_URL = `${rpcByNetworkType[activeTab.networkType]}${COINS}`;
        const CHAINS_URL = `${rpcByNetworkType[activeTab.networkType]}${CHAINS}`;

        const responseCoins = await fetch(COINS_URL);
        const coinsData: CoinsData = await responseCoins.json();

        const responseChains = await fetch(CHAINS_URL);
        const chainsData: ChainsData = await responseChains.json();

        const chainIdToName = chainsData.chains.reduce((acc, chain) => {
          acc[chain.chain_id] = formatString(chain.name);
          return acc;
        }, {} as Record<string, string>);

        const enrichedCoins = coinsData.foreignCoins.map((coin) => ({
          ...coin,
          chainName: chainIdToName[coin.foreign_chain_id] || "Unknown",
        }));

        const sortedCoins = enrichedCoins.sort((a, b) => a.chainName.localeCompare(b.chainName));

        if (activeTab.networkType === "mainnet") setMainnetCoins(sortedCoins);
        if (activeTab.networkType === "testnet") setTestnetCoins(sortedCoins);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (activeTab.networkType === "mainnet") setMainnetCoins([]);
        if (activeTab.networkType === "testnet") setTestnetCoins([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab.networkType]);

  const coins = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetCoins : testnetCoins;
  }, [activeTab.networkType, mainnetCoins, testnetCoins]);

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="foreign-coins-" />

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
                <th>Wallet</th>
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
                  <td>
                    <button
                      onClick={() => addTokenToMetaMask(coin)}
                      className={`px-3 py-1 text-sm rounded bg-[#00A5C6] dark:bg-[#B0FF61] text-white dark:text-black ${
                        isCorrectNetwork ? "hover:opacity-80" : "opacity-25 cursor-not-allowed"
                      }`}
                      disabled={!isCorrectNetwork}
                      title={
                        !isCorrectNetwork
                          ? `Please switch to ZetaChain ${activeTab.networkType === "mainnet" ? "mainnet" : "testnet"}`
                          : undefined
                      }
                    >
                      <b>＋</b>&nbsp;{coin.symbol}
                    </button>
                  </td>
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
