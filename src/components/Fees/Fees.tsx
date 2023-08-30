import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchFees } from "@zetachain/toolkit/helpers/fees";

const Fees = ({ type }) => {
  const [fees, setFees] = useState(null);

  useEffect(() => {
    fetchFees()
      .then((data) => {
        setFees(data);
      })
      .catch((error) => console.error("Error fetching fees:", error));
  }, []);

  const renderTable = (feesData) => (
    <table>
      <thead>
        <tr>
          <th>Network</th>
          <th>Total Fee</th>
          <th>Gas Fee</th>
          <th>Protocol Fee</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(feesData).map((network) => (
          <tr key={network}>
            <td>{network}</td>
            <td>{feesData[network].totalFee}</td>
            <td>{feesData[network].gasFee}</td>
            <td>{feesData[network].protocolFee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      {fees ? (
        type === "ccm" ? (
          <div>{renderTable(fees.feesCCM)}</div>
        ) : (
          <div>{renderTable(fees.feesZEVM)}</div>
        )
      ) : (
        "Loading..."
      )}
    </div>
  );
};

Fees.propTypes = {
  type: PropTypes.oneOf(["ccm", "zevm"]).isRequired,
};

export default Fees;
