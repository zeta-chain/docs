import { useEffect, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

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

type ParamsData = {
  chain_params: {
    chain_params: {
      chain_id: string;
      confirmation_count: string;
    }[];
  };
};

const CHAINS = "/zeta-chain/observer/supportedChains";
const COINS = "/zeta-chain/fungible/foreign_coins";
const CHAIN_PARAMS = "/zeta-chain/observer/get_chain_params";

const formatString = (str: string) => {
  return str
    .split("_")
    .map((word: string) =>
      word.length <= 3 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

export const ConnectedChainsList = () => {
  const [mainnetChains, setMainnetChains] = useState<Chain[]>([]);
  const [testnetChains, setTestnetChains] = useState<Chain[]>([]);
  const [tokens, setTokens] = useState<ForeignCoin[]>([]);
  const [confirmations, setConfirmations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const CHAINS_URL = `${rpcByNetworkType[activeTab.networkType]}${CHAINS}`;
        const COINS_URL = `${rpcByNetworkType[activeTab.networkType]}${COINS}`;
        const CHAIN_PARAMS_URL = `${rpcByNetworkType[activeTab.networkType]}${CHAIN_PARAMS}`;

        const [chainsResponse, tokensResponse, paramsResponse] = await Promise.all([
          fetch(CHAINS_URL).then((res) => res.json() as Promise<ChainsData>),
          fetch(COINS_URL).then((res) => res.json() as Promise<CoinsData>),
          fetch(CHAIN_PARAMS_URL).then((res) => res.json()),
        ]);

        const formattedChains = chainsResponse.chains.map((chain) => ({
          ...chain,
          chain_name: formatString(chain.chain_name),
        }));

        const sortedChains = formattedChains.sort((a, b) => a.chain_name.localeCompare(b.chain_name));

        if (activeTab.networkType === "mainnet") setMainnetChains(sortedChains);
        if (activeTab.networkType === "testnet") setTestnetChains(sortedChains);

        setTokens(tokensResponse.foreignCoins);

        const confirmationMap: Record<string, string> = {};
        if ((paramsResponse as ParamsData)?.chain_params?.chain_params) {
          (paramsResponse as ParamsData).chain_params.chain_params.forEach((param) => {
            if (param.chain_id && param.confirmation_count) {
              confirmationMap[param.chain_id] = param.confirmation_count;
            }
          });
        }
        setConfirmations(confirmationMap);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMainnetChains([]);
        setTestnetChains([]);
        setTokens([]);
        setConfirmations({});
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
      return { text: "ZetaChain Gateway", url: "/developers/chains/zetachain" };
    }
    if (chain.vm === "evm" && chain.consensus === "ethereum") {
      return { text: "EVM Gateway", url: "/developers/chains/evm" };
    }
    if (chain.vm === "no_vm" && chain.consensus === "bitcoin") {
      return { text: "Bitcoin Gateway", url: "/developers/chains/bitcoin" };
    }
    if (chain.vm === "svm" && chain.consensus === "solana_consensus") {
      return { text: "Solana Gateway", url: "/developers/chains/solana" };
    }
    if (chain.vm === "tvm" && chain.consensus === "catchain_consensus") {
      return { text: "TON Gateway", url: "/developers/chains/ton" };
    }
    if (chain.vm === "mvm_sui" && chain.consensus === "sui_consensus") {
      return { text: "Sui Gateway", url: "/developers/chains/sui" };
    }
    return null;
  };

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="connected-chains-" />

      {isLoading ? (
        <LoadingTable rowCount={7} />
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Label</th>
                <th>Supported Tokens</th>
                <th>VM</th>
                <th>Consensus</th>
                <th>CCTX Gateway</th>
                <th>Confirmations</th>
                <th>Gateway Docs</th>
              </tr>
            </thead>

            <tbody>
              {chains.map((chain, index) => {
                const docsLink = getDocsLink(chain);
                const formattedChainName = chain.name
                  .replace(/_/g, " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(" ")
                  .replace(/zeta/i, "ZetaChain")
                  .replace(/bsc/i, "BNB")
                  .replace(/btc/i, "Bitcoin")
                  .replace(/eth/i, "Ethereum")
                  .replace(/mainnet/i, "")
                  .trim();
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr key={index}>
                    <td>{chain.chain_id}</td>
                    <td>{formattedChainName}</td>
                    <td>{chain.name}</td>
                    <td>{getTokensForChain(chain.chain_id) || ""}</td>
                    <td>{formatString(chain.vm)}</td>
                    <td>{formatString(chain.consensus)}</td>
                    <td>{chain.cctx_gateway || ""}</td>
                    <td>{confirmations[chain.chain_id] || ""}</td>
                    <td>
                      {docsLink ? (
                        <a
                          href={docsLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00A5C6] dark:text-lime-500"
                        >
                          {docsLink.text}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
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
