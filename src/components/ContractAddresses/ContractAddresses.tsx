import React, { useState, useEffect, ReactNode } from "react";

interface DataObject {
  [key: string]: string;
}

interface NestedObject {
  [key: string]: DataObject;
}

interface FetchedData {
  [key: string]: NestedObject;
}

const edgeCases: { [key: string]: string } = {
  ccm: "CCM",
  zevm: "zEVM",
  bsc: "BSC",
};

const addressesURL =
  "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.json";

const DataFetch: React.FC = () => {
  const [data, setData] = useState<FetchedData | null>(null);

  useEffect(() => {
    fetch(addressesURL)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData as FetchedData))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const formatTitle = (title: string) => {
    const handleEdgeCases = (word: string) => {
      const upper = word.charAt(0).toUpperCase() + word.slice(1);
      const edgeCase = edgeCases[word.toLowerCase()];
      return edgeCase ? edgeCase : upper;
    };
    return title.replace(/_/g, " ").split(" ").map(handleEdgeCases).join(" ");
  };

  const renderTable = (
    blockchainData: NestedObject[],
    title: string
  ): ReactNode => {
    const allEntries = blockchainData.reduce((acc, tableData) => {
      const validEntries = Object.entries(tableData).filter(
        ([key, value]) => value && value.trim() !== ""
      );
      return [...acc, ...validEntries];
    }, [] as [string, string][]);

    if (allEntries.length === 0) {
      return null;
    }

    return (
      <div key={title}>
        <h2>{formatTitle(title)}</h2>
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Contract address</th>
            </tr>
          </thead>
          <tbody>
            {allEntries.map(([key, value], index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Generate a mapping of blockchain to all its categories' data
  const blockchainMapping: { [key: string]: NestedObject[] } = {};
  Object.values(data).forEach((nestedObject) => {
    Object.entries(nestedObject).forEach(([blockchain, blockchainData]) => {
      if (!blockchainMapping[blockchain]) {
        blockchainMapping[blockchain] = [];
      }
      blockchainMapping[blockchain].push(blockchainData);
    });
  });

  return (
    <div>
      {Object.entries(blockchainMapping).map(([blockchain, blockchainData]) =>
        renderTable(blockchainData, blockchain)
      )}
    </div>
  );
};

export default DataFetch;
