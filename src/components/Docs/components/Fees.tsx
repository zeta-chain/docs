/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ZetaChainClient } from "@zetachain/toolkit/client";
import { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";

type FeesState = {
  messaging: any[];
  omnichain: any[];
};

type FeesProps = {
  type: "messaging" | "omnichain";
};

export const Fees: React.FC<FeesProps> = ({ type }) => {
  const [mainnetFees, setMainnetFees] = useState<FeesState>({ messaging: [], omnichain: [] });
  const [testnetFees, setTestnetFees] = useState<FeesState>({ messaging: [], omnichain: [] });

  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const client = new ZetaChainClient({ network: activeTab.networkType });

    client
      .getFees(500000)
      .then((data: any) => {
        const sortedOmnichainFees = [...data.omnichain].sort((a, b) =>
          a.foreign_chain_id.localeCompare(b.foreign_chain_id)
        );

        const updatedData: FeesState = {
          messaging: data.messaging.filter(
            (fee: any) => !["18332", "8332"].includes(fee.chainID) // There is a bug in getFees that returns messaging fees for Bitcoin. This filters them out.
          ),
          omnichain: sortedOmnichainFees,
        };

        if (activeTab.networkType === "mainnet") setMainnetFees(updatedData);
        if (activeTab.networkType === "testnet") setTestnetFees(updatedData);

        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching fees:", error);
        setIsLoading(false);
      });
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
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix={`${type}-fees-`} />

      {isLoading ? (
        <LoadingTable rowCount={type === "messaging" ? 2 : 7} />
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
