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

const DataFetch: React.FC = () => {
  const [data, setData] = useState<FetchedData | null>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/zeta-chain/protocol-contracts/main/data/addresses.json"
    )
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData as FetchedData))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const formatTitle = (title: string) => {
    return title
      .split("_")
      .join(" ")
      .split(" ")
      .map((word) =>
        word.toLowerCase() === "ccm"
          ? "CCM"
          : word.toLowerCase() === "bsc"
          ? "BSC"
          : word.toLowerCase() === "zevm"
          ? "zEVM"
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  const renderTable = (tableData: DataObject, title: string): ReactNode => {
    const validEntries = Object.entries(tableData).filter(
      ([key, value]) => value && value.trim() !== ""
    );

    if (validEntries.length === 0) {
      return null;
    }

    return (
      <div key={title}>
        <h2>{formatTitle(title)}</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {validEntries.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {Object.entries(data).map(([key, value]) => {
        return Object.entries(value).map(([subKey, subValue]) =>
          renderTable(subValue, `${key} - ${subKey}`)
        );
      })}
    </div>
  );
};

export default DataFetch;
