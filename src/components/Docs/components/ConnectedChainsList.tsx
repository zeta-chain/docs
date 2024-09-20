import Link from "next/link";
import { useEffect, useState } from "react";

type Chain = {
  chain_id: string;
  chain_name: string;
  network: string;
  network_type: string;
  vm: string;
  consensus: string;
  is_external: boolean;
  cctx_gateway: string;
  name: string;
};

type ForeignCoin = {
  zrc20_contract_address: string;
  asset: string;
  foreign_chain_id: string;
  decimals: number;
  name: string;
  symbol: string;
  coin_type: string;
};

type CoinsData = {
  foreignCoins: ForeignCoin[];
};

type ChainsData = {
  chains: Chain[];
};

const CHAINS = "/zeta-chain/observer/supportedChains";
const COINS = "/zeta-chain/fungible/foreign_coins";

const rpcByNetworkType: { [key: string]: string } = {
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
};

const formatString = (str: string) => {
  return str
    .split("_")
    .map((word: string) =>
      word.length <= 3 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

export const ConnectedChainsList = () => {
  const tabs = [
    { label: "Mainnet Beta", networkType: "mainnet" },
    { label: "Testnet", networkType: "testnet" },
  ];

  const [mainnetChains, setMainnetChains] = useState<Chain[]>([]);
  const [testnetChains, setTestnetChains] = useState<Chain[]>([]);
  const [tokens, setTokens] = useState<ForeignCoin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const CHAINS_URL = `${rpcByNetworkType[activeTab.networkType]}${CHAINS}`;
        const COINS_URL = `${rpcByNetworkType[activeTab.networkType]}${COINS}`;

        const [chainsResponse, tokensResponse] = await Promise.all([
          fetch(CHAINS_URL).then((res) => res.json() as Promise<ChainsData>),
          fetch(COINS_URL).then((res) => res.json() as Promise<CoinsData>),
        ]);

        const formattedChains = chainsResponse.chains.map((chain) => ({
          ...chain,
          chain_name: formatString(chain.chain_name),
        }));

        const sortedChains = formattedChains.sort((a, b) => a.chain_name.localeCompare(b.chain_name));

        if (activeTab.networkType === "mainnet") setMainnetChains(sortedChains);
        if (activeTab.networkType === "testnet") setTestnetChains(sortedChains);

        setTokens(tokensResponse.foreignCoins);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMainnetChains([]);
        setTestnetChains([]);
        setTokens([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab.networkType]);

  const chains = activeTab.networkType === "mainnet" ? mainnetChains : testnetChains;

  const getTokensForChain = (chainId: string) => {
    return tokens
      .filter((token) => token.foreign_chain_id === chainId)
      .map((token) => token.symbol)
      .join(", ");
  };

  const getDocsLink = (chain: Chain) => {
    if (chain.vm === "evm" && chain.consensus === "tendermint" && chain.cctx_gateway === "zevm") {
      return {
        text: "ZetaChain Gateway",
        url: "/developers/chains/zetachain",
      };
    }
    if (chain.vm === "evm" && chain.consensus === "ethereum") {
      return {
        text: "EVM Gateway",
        url: "/developers/chains/evm",
      };
    }
    if (chain.vm === "no_vm" && chain.consensus === "bitcoin") {
      return {
        text: "Bitcoin Gateway",
        url: "/developers/chains/bitcoin",
      };
    }
    return null;
  };

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
                <th>Chain ID</th>
                <th>Chain Name</th>
                <th>Label</th>
                <th>Supported Tokens</th>
                <th>Gateway Docs</th>
                <th>VM</th>
                <th>Consensus</th>
                <th>CCTX Gateway</th>
              </tr>
            </thead>

            <tbody>
              {chains.map((chain, index) => {
                const docsLink = getDocsLink(chain);
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr key={index}>
                    <td>{chain.chain_id}</td>
                    <td>{chain.chain_name}</td>
                    <td>{chain.name}</td>
                    <td>{getTokensForChain(chain.chain_id) || ""}</td>
                    <td>
                      {docsLink ? (
                        <Link
                          href={docsLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00A5C6] dark:text-lime-500"
                        >
                          {docsLink.text}
                        </Link>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>{chain.vm}</td>
                    <td>{chain.consensus}</td>
                    <td>{chain.cctx_gateway}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className="my-4">
        Source:{" "}
        <a
          href={`${rpcByNetworkType[activeTab.networkType]}${CHAINS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A5C6] dark:text-[#B0FF61]"
        >
          {rpcByNetworkType[activeTab.networkType]}
          {CHAINS}
        </a>
      </p>
    </div>
  );
};

export default ConnectedChainsList;
