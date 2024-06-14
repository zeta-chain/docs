import { useCallback, useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

type Subspace = {
  subspace: string;
  keys: string[];
};

type SubspacesData = {
  subspaces: Subspace[];
};

export const SubspaceKeyTable = () => {
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
  const [isLoading, setIsLoading] = useState(false);

  const [mainnetSubspacesData, setMainnetSubspacesData] = useState<Subspace[]>([]);
  const [testnetSubspacesData, setTestnetSubspacesData] = useState<Subspace[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const baseUrl = rpcByNetworkType[activeTab.networkType];
    const url = `${baseUrl}/cosmos/params/v1beta1/subspaces`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: SubspacesData = await response.json();

      if (activeTab.networkType === "mainnet") setMainnetSubspacesData(data.subspaces);
      if (activeTab.networkType === "testnet") setTestnetSubspacesData(data.subspaces);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (activeTab.networkType === "mainnet") setMainnetSubspacesData([]);
      if (activeTab.networkType === "testnet") setTestnetSubspacesData([]);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab.networkType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const subspacesData = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetSubspacesData : testnetSubspacesData;
  }, [activeTab.networkType, mainnetSubspacesData, testnetSubspacesData]);

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="subspace-key-" />

      {isLoading ? (
        <LoadingTable rowCount={40} />
      ) : (
        <div className="overflow-x-auto mt-8">
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
        </div>
      )}
    </div>
  );
};
