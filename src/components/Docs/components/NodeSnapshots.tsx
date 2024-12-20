import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs, IconLink } from "~/components/shared";

import { CopyToClipboard } from "../../shared/components/CodeBlock/components/CopyToClipboard";

interface NodeSnapshotsProps {
  apiUrl: string;
}

interface Snapshot {
  environment: string;
  type: string;
  networkVersion?: string;
  height?: number;
  size?: number;
  creationDate?: string;
  link?: string;
  links?: string[];
  instructions?: string;
}

const NodeSnapshots: React.FC<NodeSnapshotsProps> = ({ apiUrl }) => {
  const [mainnetSnapshots, setMainnetSnapshots] = useState<Snapshot[]>([]);
  const [testnetSnapshots, setTestnetSnapshots] = useState<Snapshot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [
        `${apiUrl}/testnet/fullnode/latest.json`,
        `${apiUrl}/testnet/archive-multipart/latest.json`,
        `${apiUrl}/mainnet/fullnode/latest.json`,
        `${apiUrl}/mainnet/archive-multipart/latest.json`,
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

      const allData = await Promise.all(endpoints.map((endpoint) => fetchEndpoint(endpoint)));
      const combinedData = allData.flat();

      setMainnetSnapshots(combinedData.filter((snapshot) => snapshot.environment === "mainnet"));
      setTestnetSnapshots(combinedData.filter((snapshot) => snapshot.environment === "testnet"));
      setIsLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const formatDate = (dateString?: string) => {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      return "Invalid date";
    }
    return format(date, "PPP");
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
                <th>Type</th>
                <th>Network Version</th>
                <th>Height</th>
                <th>Creation Date</th>
                <th>Size</th>
                <th>Download</th>
                <th>API</th>
              </tr>
            </thead>
            <tbody>
              {snapshots.map((snapshot, index) => (
                <tr key={index}>
                  <td>{snapshot.type}</td>
                  <td>{snapshot.networkVersion || ""}</td>
                  <td>{snapshot.height || ""}</td>
                  <td>{formatDate(snapshot.creationDate)}</td>

                  <td>
                    {snapshot.size
                      ? snapshot.size >= 1024 ** 4
                        ? (snapshot.size / 1024 ** 4).toFixed(1) + "TB"
                        : (snapshot.size / 1024 ** 3).toFixed(1) + "GB"
                      : ""}
                  </td>
                  <td>
                    {snapshot.link ? (
                      <a href={snapshot.link} target="_blank" rel="noopener noreferrer">
                        <button>Download</button>
                      </a>
                    ) : snapshot.links ? (
                      <div>
                        <button
                          onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                          className="hover:text-[rgb(176,255,97,0.8)]"
                        >
                          {dropdownOpen === index ? "Hide Parts" : "Show Parts"}
                        </button>
                        {dropdownOpen === index && (
                          <div className="mt-2">
                            <ul>
                              {snapshot.links.map((link: string, linkIndex: number) => (
                                <li key={linkIndex} className="mt-1">
                                  <a href={link} target="_blank" rel="noopener noreferrer">
                                    Part {linkIndex + 1}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-2 flex items-center gap-4">
                              <p>Script</p>
                              <CopyToClipboard getValue={() => snapshot.instructions || "No instructions available"} />
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </td>
                  <td>
                    <a
                      href={`https://snapshots.rpc.zetachain.com/${snapshot.environment}/${snapshot.type}/latest.json`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600"
                    >
                      <IconLink className="text-grey-300 dark:text-grey-400 icon-link transition-all" />
                    </a>
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
