import { useEffect, useState } from "react";

import { LoadingTable, NavTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

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

const CHAIN_PARAMS = "/zeta-chain/observer/get_chain_params";
const SUPPORTED_CHAINS = "/zeta-chain/observer/supportedChains";

export const ChainConfirmations = () => {
  const [chainParams, setChainParams] = useState<ChainParams>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const paramsUrl = `${rpcByNetworkType[activeTab.networkType]}${CHAIN_PARAMS}`;
        const chainsUrl = `${rpcByNetworkType[activeTab.networkType]}${SUPPORTED_CHAINS}`;

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
  }, [activeTab.networkType]);

  return (
    <div className="mt-8">
      <NavTabs tabs={networkTypeTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <LoadingTable rowCount={3} />
      ) : (
        <div className="overflow-x-auto mt-8">
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
