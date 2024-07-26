// components/NodeSnapshots.tsx
import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

interface NodeSnapshotsProps {
  apiUrl: string;
}

interface Snapshot {
  networkVersion: string;
  height: number;
  creationDate: string;
  filename: string;
  link: string;
}

const NodeSnapshots: React.FC<NodeSnapshotsProps> = ({ apiUrl }) => {
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [
        `${apiUrl}/testnet/fullnode.json`,
        `${apiUrl}/testnet/archive.json`,
        `${apiUrl}/mainnet/fullnode.json`,
        `${apiUrl}/mainnet/archive.json`,
      ];

      try {
        const allData = await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)));
        const combinedData = allData.map((response) => response.data.snapshots).flat();
        setSnapshots(combinedData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    return format(date, "PPPpp");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Network Version</th>
          <th>Height</th>
          <th>Creation Date</th>
          <th>Filename</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {snapshots.map((snapshot, index) => (
          <tr key={index}>
            <td>{snapshot.networkVersion}</td>
            <td>{snapshot.height}</td>
            <td>{formatDate(snapshot.creationDate)}</td>
            <td>{snapshot.filename}</td>
            <td>
              <a href={snapshot.link} target="_blank" rel="noopener noreferrer">
                <button>Download</button>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NodeSnapshots;
