// components/NodeSnapshots.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

const NodeSnapshots = ({ apiUrl }) => {
  const [snapshots, setSnapshots] = useState([]);

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
            <td>{format(new Date(snapshot.creationDate), "PPPpp")}</td>
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
