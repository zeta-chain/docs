/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ZetaChainClient } from "@zetachain/toolkit/client";
import { useEffect, useMemo, useState } from "react";

type FeesState = {
  messaging: any[];
  omnichain: any[];
};

type FeesProps = {
  type: "messaging" | "omnichain";
};

export const Fees: React.FC<FeesProps> = ({ type }) => {
  const tabs = [
    { label: "Mainnet Beta", networkType: "mainnet" },
    { label: "Testnet", networkType: "testnet" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [mainnetFees, setMainnetFees] = useState<FeesState>({
    messaging: [],
    omnichain: [],
  });
  const [testnetFees, setTestnetFees] = useState<FeesState>({
    messaging: [],
    omnichain: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFees = async () => {
      setIsLoading(true);

      try {
        const client = new ZetaChainClient({
          network: activeTab.networkType,
        });
        const data = await client.getFees(500000);

        const sortedOmnichainFees = [...data.omnichain].sort((a, b) =>
          a.foreign_chain_id.localeCompare(b.foreign_chain_id)
        );

        const updatedData: FeesState = {
          messaging: data.messaging,
          omnichain: sortedOmnichainFees,
        };

        if (activeTab.networkType === "mainnet") setMainnetFees(updatedData);
        if (activeTab.networkType === "testnet") setTestnetFees(updatedData);
      } catch (error) {
        console.error("Error fetching fees:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFees();
  }, [activeTab.networkType]);

  const fees = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetFees : testnetFees;
  }, [activeTab.networkType, mainnetFees, testnetFees]);

  const renderTableHeaders = () => {
    if (type === "messaging") {
      return (
        <tr>
          <th>Chain ID</th>
          <th>Total Fee</th>
          <th>Gas Fee</th>
          <th>Protocol Fee</th>
        </tr>
      );
    }
    return (
      <tr>
        <th>Symbol</th>
        <th>Chain ID</th>
        <th>Total Fee</th>
        <th>Gas Fee</th>
        <th>Protocol Fee</th>
      </tr>
    );
  };

  const renderTableRows = () => {
    if (type === "messaging") {
      return fees.messaging.map((fee: any, index) => (
        <tr key={index}>
          <td>{fee.chainID}</td>
          <td>{fee.totalFee}</td>
          <td>{fee.gasFee}</td>
          <td>{fee.protocolFee}</td>
        </tr>
      ));
    }

    return fees.omnichain.map((fee: any, index) => (
      <tr key={index}>
        <td>{fee.symbol}</td>
        <td>{fee.foreign_chain_id}</td>
        <td>{fee.totalFee}</td>
        <td>{fee.gasFee}</td>
        <td>{fee.protocolFee}</td>
      </tr>
    ));
  };

  return (
    <div className="mt-8 first:mt-0">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.networkType}
            onClick={() => setActiveTab(tab)}
            className={activeTab.networkType === tab.networkType ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>{renderTableHeaders()}</thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};
