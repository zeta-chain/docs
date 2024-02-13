import React, { useState, useEffect } from "react";

const SubspaceKeyTable = () => {
  const [activeTab, setActiveTab] = useState("testnet");
  const [subspacesData, setSubspacesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const baseUrl =
      activeTab === "testnet"
        ? "https://zetachain-athens.blockpi.network/lcd/v1/public"
        : "https://zetachain.blockpi.network/lcd/v1/public";
    const url = `${baseUrl}/cosmos/params/v1beta1/subspaces`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubspacesData(data.subspaces);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSubspacesData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={
            activeTab === "testnet"
              ? { fontWeight: "bold", textDecoration: "underline" }
              : {}
          }
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={
            activeTab === "mainnet"
              ? { fontWeight: "bold", textDecoration: "underline" }
              : {}
          }
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
              <th>Subspace</th>
              <th>Key</th>
            </tr>
          </thead>
          <tbody>
            {subspacesData.map(
              (subspace) =>
                subspace.keys.length > 0 &&
                subspace.keys.map((key) => (
                  <tr key={`${subspace.subspace}-${key}`}>
                    <td>{subspace.subspace}</td>
                    <td>{key}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubspaceKeyTable;
