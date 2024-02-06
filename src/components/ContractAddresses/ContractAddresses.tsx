import React, { useState, useEffect } from "react";

const ContractAddresses = () => {
  const [activeTab, setActiveTab] = useState("testnet");
  const [isLoading, setIsLoading] = useState(true);
  const [groupedData, setGroupedData] = useState({ testnet: {}, mainnet: {} });
  const testnetUrl =
    "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/feat/addresses/data/addresses.testnet.json";
  const mainnetUrl =
    "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/feat/addresses/data/addresses.mainnet.json";

  useEffect(() => {
    const fetchAndGroupAddresses = async () => {
      setIsLoading(true);
      const responses = await Promise.all([
        fetch(testnetUrl),
        fetch(mainnetUrl),
      ]);
      const [testnetData, mainnetData] = await Promise.all(
        responses.map((res) => res.json())
      );

      const groupByChainId = (data: any) =>
        data.reduce((acc: any, item: any) => {
          (acc[item.chain_name] = acc[item.chain_name] || []).push(item);
          return acc;
        }, {});

      setGroupedData({
        testnet: groupByChainId(testnetData),
        mainnet: groupByChainId(mainnetData),
      });
      setIsLoading(false);
    };

    fetchAndGroupAddresses();
  }, []);

  const source = activeTab === "testnet" ? testnetUrl : mainnetUrl;

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
        Object.entries(groupedData[activeTab]).map(([chainName, contracts]) => (
          <div key={chainName}>
            <h3>{chainName}</h3>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Symbol</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract: any, index: any) => (
                  <tr key={index}>
                    <td>{contract.type}</td>
                    <td>{contract.symbol}</td>
                    <td>{contract.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
      <p>
        Source:&nbsp;
        <a href={`${source}`} target="_blank" rel="noopener noreferrer">
          {source}
        </a>
      </p>
    </div>
  );
};

export default ContractAddresses;
