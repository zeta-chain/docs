import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ZetaChainClient } from "@zetachain/toolkit/client";

const Fees = ({ type }) => {
  const [fees, setFees] = useState({ messaging: [], omnichain: [] });
  const [activeTab, setActiveTab] = useState("testnet");
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

        const updatedData = {
          ...data,
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
    } else {
      return (
        <tr>
          <th>Symbol</th>
          <th>Chain ID</th>
          <th>Total Fee</th>
          <th>Gas Fee</th>
          <th>Protocol Fee</th>
        </tr>
      );
    }
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
    } else {
      return fees.omnichain.map((fee: any, index) => (
        <tr key={index}>
          <td>{fee.symbol}</td>
          <td>{fee.foreign_chain_id}</td>
          <td>{fee.totalFee}</td>
          <td>{fee.gasFee}</td>
          <td>{fee.protocolFee}</td>
        </tr>
      ));
    }
  };

  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
  const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={activeTab === "testnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={activeTab === "mainnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <table>
          <thead>{renderTableHeaders()}</thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      )}
    </div>
  );
};

Fees.propTypes = {
  type: PropTypes.oneOf(["messaging", "omnichain"]).isRequired,
};

export default Fees;
