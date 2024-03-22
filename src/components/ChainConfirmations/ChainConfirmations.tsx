import React, { useState, useEffect } from "react";

const API = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
};

const CHAIN_PARAMS = "/zeta-chain/observer/get_chain_params";
const SUPPORTED_CHAINS = "/zeta-chain/observer/supportedChains";

const ChainConfirmations = () => {
  const [chainParams, setChainParams] = useState([]);
  const [supportedChainIds, setSupportedChainIds] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("testnet");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const paramsUrl = `${API[activeTab]}${CHAIN_PARAMS}`;
        const chainsUrl = `${API[activeTab]}${SUPPORTED_CHAINS}`;

        // Fetch supported chains first
        const responseChains = await fetch(chainsUrl);
        const chainsData = await responseChains.json();

        const newSupportedChainIds = new Set(
          chainsData.chains.map((chain) => chain.chain_id)
        );
        setSupportedChainIds(newSupportedChainIds);

        // Fetch chain parameters
        const responseParams = await fetch(paramsUrl);
        const paramsData = await responseParams.json();

        // Filter out unsupported chains and chains with ID 7000 or 7001
        const filteredParams = paramsData.chain_params.chain_params
          .filter(
            (param) =>
              newSupportedChainIds.has(param.chain_id) &&
              !["7000", "7001"].includes(param.chain_id)
          )
          .map((param) => ({
            ...param,
            chainName:
              chainsData.chains.find(
                (chain) => chain.chain_id === param.chain_id
              )?.chain_name || "Unknown",
          }));

        setChainParams(filteredParams);
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
              <th>Confirmation Count</th>
            </tr>
          </thead>
          <tbody>
            {chainParams.map((param, index) => (
              <tr key={index}>
                <td>{param.chainName}</td>
                <td>{param.confirmation_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ChainConfirmations;
