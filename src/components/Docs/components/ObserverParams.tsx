import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

type Chain = {
  chain_id: string;
  chain_name: string;
};

type ObserverParamsType = {
  ballot_threshold: string;
  chain: Chain;
  is_supported: boolean;
  min_observer_delegation: string;
};

const APIs: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/observer/params",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public/zeta-chain/observer/params",
};

export const ObserverParams = () => {
  const [data, setData] = useState<ObserverParamsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  useEffect(() => {
    const API = APIs[activeTab];
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
    <div className="mt-6">
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? active : inactive}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? active : inactive}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>

      {isLoading ? (
        <Skeleton
          variant="rectangular"
          height={100}
          className="rounded mb-5 last-of-type:mb-0 bg-grey-200 dark:bg-grey-600"
        />
      ) : (
        <div className="overflow-x-auto">
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
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                  <td>{observerParam.chain.chain_name}</td>
                  {/* eslint-disable-next-line radix */}
                  <td>{parseInt(observerParam.min_observer_delegation)}</td>
                  <td>{parseFloat(observerParam.ballot_threshold) * 100}%</td>
                  <td>{observerParam.is_supported ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4">
            Source:{" "}
            <a href={APIs[activeTab]} target="_blank" rel="noopener noreferrer" className="text-green-100">
              {APIs[activeTab]}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
