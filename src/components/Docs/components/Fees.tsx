/* eslint-disable react/no-array-index-key */
import { Skeleton } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ZetaChainClient } from "@zetachain/toolkit/client";
import { useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

type FeesState = {
  messaging: any[];
  omnichain: any[];
};

type FeesProps = {
  type: "messaging" | "omnichain";
};

export const Fees: React.FC<FeesProps> = ({ type }) => {
  const [fees, setFees] = useState<FeesState>({ messaging: [], omnichain: [] });
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const client = new ZetaChainClient({ network: activeTab });
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

        setFees(updatedData);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching fees:", error);
        setIsLoading(false);
      });
  }, [activeTab]);

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

  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
  const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

  return (
    <div className="mt-8">
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>

      {isLoading ? (
        <Skeleton
          variant="rectangular"
          height={100}
          className="rounded mb-5 last-of-type:mb-0 bg-grey-200 dark:bg-grey-600"
        />
      ) : (
        <div className="overflow-x-auto">
          <table>
            <thead>{renderTableHeaders()}</thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};
