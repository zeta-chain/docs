import { useCallback, useEffect, useState } from "react";

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
  const [subspacesData, setSubspacesData] = useState<Subspace[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

      setSubspacesData(data.subspaces);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSubspacesData([]);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab.networkType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="mt-8">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
