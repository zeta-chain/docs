import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState, useMemo } from "react";
import { NetworkTypeTabs, LoadingTable, networkTypeTabs } from "~/components/shared";

interface NodeSnapshotsProps {
  apiUrl: string;
}

interface Snapshot {
  environment: string;
  type: string;
  networkVersion?: string;
  height?: number;
  creationDate?: string;
  link?: string;
}

const NodeSnapshots: React.FC<NodeSnapshotsProps> = ({ apiUrl }) => {
  const [mainnetSnapshots, setMainnetSnapshots] = useState<Snapshot[]>([]);
  const [testnetSnapshots, setTestnetSnapshots] = useState<Snapshot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [
        `${apiUrl}/testnet/fullnode/latest.json`,
        `${apiUrl}/testnet/archive/latest.json`,
        `${apiUrl}/mainnet/fullnode/latest.json`,
        `${apiUrl}/mainnet/archive/latest.json`,
      ];

      const fetchEndpoint = async (endpoint: string) => {
        try {
          const response = await axios.get(endpoint);
          if (response.config.url) {
            const urlParts = response.config.url.split("/");
            const type = urlParts[urlParts.length - 2];
            const environment = urlParts[urlParts.length - 3];
            return response.data.snapshots.map((snapshot: any) => ({
              ...snapshot,
              environment,
              type,
            }));
          }
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            const urlParts = endpoint.split("/");
            const type = urlParts[urlParts.length - 2];
            const environment = urlParts[urlParts.length - 3];
            return [
              {
                environment,
                type,
              },
            ];
          } else {
            console.error("Error fetching data", error);
          }
        }
        return [];
      };

      const allData = await Promise.all(endpoints.map(fetchEndpoint));
      const combinedData = allData.flat();

      setMainnetSnapshots(combinedData.filter(snapshot => snapshot.environment === "mainnet"));
      setTestnetSnapshots(combinedData.filter(snapshot => snapshot.environment === "testnet"));
      setIsLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const formatDate = (dateString?: string) => {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    return format(date, "PPPpp");
  };

  const snapshots = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetSnapshots : testnetSnapshots;
  }, [activeTab.networkType, mainnetSnapshots, testnetSnapshots]);

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="node-snapshot-" />

      {isLoading ? (
        <LoadingTable rowCount={8} />
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>
              <tr>
                <th>Environment</th>
                <th>Type</th>
                <th>Network Version</th>
                <th>Height</th>
                <th>Creation Date</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {snapshots.map((snapshot, index) => (
                <tr key={index}>
                  <td>{snapshot.environment}</td>
                  <td>{snapshot.type}</td>
                  <td>{snapshot.networkVersion || ""}</td>
                  <td>{snapshot.height || ""}</td>
                  <td>{formatDate(snapshot.creationDate)}</td>
                  <td>
                    {snapshot.link ? (
                      <a href={snapshot.link} target="_blank" rel="noopener noreferrer">
                        <button>Download</button>
                      </a>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NodeSnapshots;
