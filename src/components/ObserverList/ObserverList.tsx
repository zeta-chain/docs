import React, { useState, useEffect } from "react";
import { bech32 } from "bech32";

const ObserverList = () => {
  const [observers, setObservers] = useState<any>([]);
  const [validators, setValidators] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("testnet");

  const apis = {
    testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
    mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
  };

  useEffect(() => {
    setObservers([]);
    setValidators([]);
    fetchObservers();
    fetchValidators();
  }, [activeTab]);

  const fetchObservers = async () => {
    setIsLoading(true);
    try {
      const api = apis[activeTab];
      const response = await fetch(`${api}/zeta-chain/observer/nodeAccount`);
      const data = await response.json();
      const processedData = data.NodeAccount.map((observer: any) => ({
        ...observer,
        valoperAddress: convertToValoper(observer.operator),
      }));
      setObservers(processedData || []);
    } catch (error) {
      console.error("Error fetching observer validators:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchValidators = async (key = "") => {
    setIsLoading(true);
    try {
      const api = apis[activeTab];
      const endpoint = "/cosmos/staking/v1beta1/validators";
      const query = key ? `pagination.key=${encodeURIComponent(key)}` : "";
      const url = `${api}${endpoint}?${query}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.validators) {
        setValidators((prev: any) => [...prev, ...data.validators]);

        if (data.pagination && data.pagination.next_key) {
          await fetchValidators(data.pagination.next_key);
        }
      }
    } catch (error) {
      console.error("Error fetching validators:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const convertToValoper = (address: any) => {
    try {
      const decoded = bech32.decode(address);
      if (decoded.prefix === "zeta") {
        return bech32.encode("zetavaloper", decoded.words);
      }
    } catch (error) {
      console.error("Error converting address:", error);
    }
    return address;
  };

  const findMoniker = (valoperAddress: any) => {
    const validator = validators.find(
      (v: any) => v.operator_address === valoperAddress
    );
    return validator
      ? validator.description
      : { moniker: "Unknown", website: "", details: "" };
  };

  const sortObserversByMoniker = () => {
    return observers.sort((a: any, b: any) => {
      const monikerA = findMoniker(a.valoperAddress).moniker || "";
      const monikerB = findMoniker(b.valoperAddress).moniker || "";

      return monikerA.localeCompare(monikerB);
    });
  };

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
        <table>
          <thead>
            <tr>
              <th>Observer</th>
              <th>Moniker</th>
            </tr>
          </thead>
          <tbody>
            {sortObserversByMoniker().map((observer: any, index: number) => (
              <tr key={index}>
                <td>
                  {observer.operator}
                  <br />
                  {observer.valoperAddress}
                </td>
                <td>{findMoniker(observer.valoperAddress).moniker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ObserverList;
