import React, { useState, useEffect } from "react";

const API = {
  mainnet:
    "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.mainnet.json",
  testnet:
    "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.testnet.json",
};

const ZetaTokenTable = () => {
  const [zetaTokens, setZetaTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("testnet");

  useEffect(() => {
    setIsLoading(true);
    setZetaTokens([]);
    const fetchData = async () => {
      try {
        const response = await fetch(API[activeTab]);
        const data = await response.json();

        const zetaTokenContracts = data.filter(
          (item) => item.type === "zetaToken"
        );

        setZetaTokens(zetaTokenContracts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

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
              <th>Chain Name</th>
              <th>Chain ID</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {zetaTokens.map((token, index) => (
              <tr key={index}>
                <td>{token.chain_name}</td>
                <td>{token.chain_id}</td>
                <td>{token.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p style={{ marginBottom: "1rem" }}>
        Source:&nbsp;
        <a href={API[activeTab]} target="_blank" rel="noopener noreferrer">
          {API[activeTab]}
        </a>
      </p>
    </div>
  );
};

export default ZetaTokenTable;
