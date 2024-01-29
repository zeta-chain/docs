import React, { useState, useEffect } from "react";

const networksURL =
  "https://raw.githubusercontent.com/zeta-chain/networks/main/data/networks.json";

const NetworkDataFetch: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("testnet");
  const [isLoading, setIsLoading] = useState(true);

  const typeMapping: any = {
    evm: "EVM RPC",
    "evm-ws": "EVM WebSocket",
    "tendermint-rpc": "Tendermint RPC",
    "tendermint-http": "Tendermint HTTP",
    "cosmos-http": "Cosmos SDK HTTP",
    "tendermint-ws": "Tendermint WebSocket",
    "cosmos-grpc": "Cosmos SDK gRPC",
  };

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    const fetchData = async () => {
      try {
        const res = await fetch(networksURL);
        const data = await res.json();
        let networkData = data[`zeta_${activeTab}`];
        let sortedData = networkData?.api?.sort((a: any, b: any) => {
          const providerA = extractProvider(a.url);
          const providerB = extractProvider(b.url);
          if (providerA < providerB) return -1;
          if (providerA > providerB) return 1;
          return 0;
        });
        setData({ api: sortedData });
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  const extractProvider = (url: any) => {
    let domain = new URL(url).hostname.split(".");
    let providerName = domain[domain.length - 2];
    return providerName.charAt(0).toUpperCase() + providerName.slice(1);
  };

  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
  const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={activeTab === "testnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={activeTab === "mainnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Provider</th>
              <th>Endpoint</th>
            </tr>
          </thead>
          <tbody>
            {data?.api?.map((endpoint: any) => (
              <tr key={endpoint.url}>
                <td>{typeMapping[endpoint.type] || endpoint.type}</td>
                <td>{extractProvider(endpoint.url)}</td>
                <td>{endpoint.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NetworkDataFetch;
