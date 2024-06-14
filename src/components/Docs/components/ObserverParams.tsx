import { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";
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
  const [mainnetData, setMainnetData] = useState<ObserverParamsType[]>([]);
  const [testnetData, setTestnetData] = useState<ObserverParamsType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    const API = APIs[activeTab.networkType];

    setIsLoading(true);

    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        if (activeTab.networkType === "mainnet") setMainnetData(json.params.observer_params);
        if (activeTab.networkType === "testnet") setTestnetData(json.params.observer_params);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        if (activeTab.networkType === "mainnet") setMainnetData([]);
        if (activeTab.networkType === "testnet") setTestnetData([]);
        setIsLoading(false);
      });
  }, [activeTab.networkType]);

  const data = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetData : testnetData;
  }, [activeTab.networkType, mainnetData, testnetData]);

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="observer-params-" />

      {isLoading ? (
        <LoadingTable rowCount={3} />
      ) : (
        <div className="overflow-x-auto mt-8">
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
            <a
              href={APIs[activeTab.networkType]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A5C6] dark:text-[#B0FF61]"
            >
              {APIs[activeTab.networkType]}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
