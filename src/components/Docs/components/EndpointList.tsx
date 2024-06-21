import { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";

const networksURL = "https://raw.githubusercontent.com/zeta-chain/networks/main/data/networks.json";

const typeMapping: Record<string, string> = {
  evm: "EVM RPC",
  "evm-ws": "EVM WebSocket",
  "tendermint-rpc": "Tendermint RPC",
  "tendermint-http": "Tendermint HTTP",
  "cosmos-http": "Cosmos SDK HTTP",
  "tendermint-ws": "Tendermint WebSocket",
  "cosmos-grpc": "Cosmos SDK gRPC",
};

const extractProvider = (url: string) => {
  const domain = new URL(url).hostname.split(".");
  const providerName = domain[domain.length - 2];

  return providerName.charAt(0).toUpperCase() + providerName.slice(1);
};

export const EndpointList: React.FC = () => {
  const [mainnetData, setMainnetData] = useState<any>(null);
  const [testnetData, setTestnetData] = useState<any>(null);

  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(networksURL);
        const data = await res.json();
        const networkData = data[`zeta_${activeTab.networkType}`];

        const sortedData = networkData?.api?.sort((a: any, b: any) => {
          const providerA = extractProvider(a.url);
          const providerB = extractProvider(b.url);
          if (providerA < providerB) return -1;
          if (providerA > providerB) return 1;
          if (a.type < b.type) return -1;
          if (a.type > b.type) return 1;
          return 0;
        });

        if (activeTab.networkType === "mainnet") setMainnetData({ api: sortedData });
        if (activeTab.networkType === "testnet") setTestnetData({ api: sortedData });
      } catch (e) {
        console.error("Error fetching data:", e);
        if (activeTab.networkType === "mainnet") setMainnetData(null);
        if (activeTab.networkType === "testnet") setTestnetData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab.networkType]);

  const fetchedData = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetData : testnetData;
  }, [activeTab.networkType, mainnetData, testnetData]);

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="endpoint-list-" />

      {isLoading ? (
        <LoadingTable rowCount={12} />
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Provider</th>
                <th>Endpoint</th>
              </tr>
            </thead>

            <tbody>
              {fetchedData?.api?.map((endpoint: any) => (
                <tr key={endpoint.url}>
                  <td>{typeMapping[endpoint.type] || endpoint.type}</td>
                  <td>{extractProvider(endpoint.url)}</td>
                  <td>{endpoint.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
