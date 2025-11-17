/* eslint-disable react/no-array-index-key */
import { getFees } from "@zetachain/toolkit/query";
import { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";

type Fee = {
  chain_id: string;
  gasFeeAmount: string;
  gasFeeDecimals: number;
  gasTokenSymbol: string;
  symbol: string;
};

type FeesProps = {
  /** Component previously accepted a type prop but it's no longer used. Keeping for backward-compatibility. */
  type?: string;
};

export const Fees: React.FC<FeesProps> = (_props) => {
  const [mainnetFees, setMainnetFees] = useState<Fee[]>([]);
  const [testnetFees, setTestnetFees] = useState<Fee[]>([]);

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

        const data: Fee[] = (await getFees({ gasLimit: 500000 }, networkConfig)) as Fee[];

        if (activeTab.networkType === "mainnet") setMainnetFees(data);
        if (activeTab.networkType === "testnet") setTestnetFees(data);
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

  const formatFeeAmount = (amount: string, decimals: number): string => {
    if (decimals === 0) return amount;
    const padded = amount.padStart(decimals + 1, "0");
    const integerPart = padded.slice(0, -decimals);
    const decimalPart = padded.slice(-decimals).replace(/0+$/, "");
    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  };

  const renderTableHeaders = () => (
    <tr>
      <th>Chain ID</th>
      <th>ZRC-20</th>
      <th>Fee Amount</th>
      <th>Fee Token</th>
    </tr>
  );

  const renderTableRows = () =>
    fees.map((fee, index) => (
      <tr key={index}>
        <td>{fee.chain_id}</td>
        <td>{fee.symbol}</td>
        <td>{formatFeeAmount(fee.gasFeeAmount, fee.gasFeeDecimals)}</td>
        <td>{fee.gasTokenSymbol}</td>
      </tr>
    ));

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="fees-" />

      {isLoading ? (
        <LoadingTable rowCount={7} />
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
