/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getFees } from "@zetachain/toolkit/query";
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
    const fetchFees = async () => {
      setIsLoading(true);

      try {
        const networkConfig =
          activeTab.networkType === "mainnet"
            ? {
                api: "https://zetachain-mainnet.g.allthatnode.com/archive/rest",
                rpc: "https://zetachain-mainnet.g.allthatnode.com/archive/evm",
              }
            : {
                api: "https://zetachain-athens.g.allthatnode.com/archive/rest",
                rpc: "https://zetachain-athens.g.allthatnode.com/archive/evm",
              };

        const data = await getFees({ gasLimit: 500000 }, networkConfig);

        // Transform the data to match the expected format
        const transformedData: FeesState = {
          messaging: [], // getFees only returns omnichain fees
          omnichain: data.map((fee: any) => ({
            symbol: fee.symbol,
            foreign_chain_id: fee.chain_id,
            totalFee: fee.gasFeeAmount,
            gasFee: fee.gasFeeAmount,
            protocolFee: "0", // Protocol fee not available in new format
            gasTokenSymbol: fee.gasTokenSymbol,
            gasFeeDecimals: fee.gasFeeDecimals,
            zrc20Address: fee.zrc20Address,
          })),
        };

        if (activeTab.networkType === "mainnet") setMainnetFees(transformedData);
        if (activeTab.networkType === "testnet") setTestnetFees(transformedData);
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
        <th>Chain ID</th>
        <th>ZRC-20</th>
        <th>Fee Amount</th>
        <th>Fee Token</th>
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

    return fees.omnichain.map((fee: any, index) => {
      // Format fee amount based on decimals
      let feeAmount = fee.gasFee;
      if (fee.gasFeeDecimals) {
        const amount = fee.gasFee;
        const decimals = fee.gasFeeDecimals;

        // Pad with zeros if needed
        const paddedAmount = amount.padStart(decimals + 1, "0");

        // Insert decimal point
        const integerPart = paddedAmount.slice(0, -decimals);
        const decimalPart = paddedAmount.slice(-decimals);

        feeAmount = `${integerPart}.${decimalPart}`;

        // Remove trailing zeros
        feeAmount = feeAmount.replace(/\.?0+$/, "");
      }

      return (
        <tr key={index}>
          <td>{fee.foreign_chain_id}</td>
          <td>{fee.symbol}</td>
          <td>{feeAmount}</td>
          <td>{fee.gasTokenSymbol}</td>
        </tr>
      );
    });
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
