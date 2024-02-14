import React, { useState, useEffect } from "react";

interface Chain {
  chain_id: string;
  chain_name: string;
}

interface ObserverParams {
  ballot_threshold: string;
  chain: Chain;
  is_supported: boolean;
  min_observer_delegation: string;
}

const apis = {
  testnet:
    "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/observer/params",
  mainnet:
    "https://zetachain.blockpi.network/lcd/v1/public/zeta-chain/observer/params",
};

const ObserverParamsComponent = () => {
  const [data, setData] = useState<ObserverParams[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState("testnet");

  useEffect(() => {
    const API = apis[activeTab];
    setIsLoading(true);
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        setData(json.params.observer_params);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, [activeTab]);

  const active = { fontWeight: "bold", textDecoration: "underline" };
  const inactive = { fontWeight: "normal", textDecoration: "none" };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={activeTab === "testnet" ? active : inactive}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={activeTab === "mainnet" ? active : inactive}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Chain Name</th>
                <th>Min Observer Delegation</th>
                <th>Ballot Threshold</th>
                <th>Is Supported</th>
              </tr>
            </thead>
            <tbody>
              {data.map((observerParam, index) => (
                <tr key={index}>
                  <td>{observerParam.chain.chain_name}</td>
                  <td>{parseInt(observerParam.min_observer_delegation)}</td>
                  <td>{parseFloat(observerParam.ballot_threshold) * 100}%</td>
                  <td>{observerParam.is_supported ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          Source:&nbsp;
          <a href={apis[activeTab]} target="_blank" rel="noopener noreferrer">
            {apis[activeTab]}
          </a>
        </div>
      )}
    </div>
  );
};

export default ObserverParamsComponent;
