import React, { useState, useEffect } from "react";

const networksURL =
  "https://raw.githubusercontent.com/zeta-chain/networks/main/data/networks.json";

const NetworkDataFetch: React.FC = () => {
  const [data, setData] = useState(null);

  const typeMapping = {
    evm: "EVM RPC",
    "evm-ws": "EVM WebSocket",
    "tendermint-rpc": "Tendermint RPC",
    "tendermint-http": "Tendermint HTTP",
    "cosmos-http": "Cosmos SDK HTTP",
    "tendermint-ws": "Tendermint WebSocket",
    "cosmos-grpc": "Cosmos SDK gRPC",
  };

  useEffect(() => {
    fetch(networksURL)
      .then((response) => response.json())
      .then((jsonData) => {
        let sortedData = jsonData["zeta_testnet"].api.sort((a, b) => {
          const providerA = extractProvider(a.url);
          const providerB = extractProvider(b.url);
          if (providerA < providerB) return -1;
          if (providerA > providerB) return 1;
          return 0;
        });
        setData({ api: sortedData });
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const extractProvider = (url) => {
    let domain = new URL(url).hostname.split(".");
    let providerName = domain[domain.length - 2];
    return providerName.charAt(0).toUpperCase() + providerName.slice(1);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Provider</th>
            <th>Endpoint</th>
          </tr>
        </thead>
        <tbody>
          {data.api.map((endpoint) => (
            <tr key={endpoint.url}>
              <td>{typeMapping[endpoint.type] || endpoint.type}</td>
              <td>{extractProvider(endpoint.url)}</td>
              <td>{endpoint.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NetworkDataFetch;
