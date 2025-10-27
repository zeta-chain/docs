import { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";
import { NetworkType } from "~/lib/app.types";

import { ethers } from "ethers";
import CONTRACT_REGISTRY from "@zetachain/protocol-contracts/abi/Registry.sol/Registry.json";
import { networkDetails } from "./NetworkDetails";

const CONTRACT_REGISTRY_ADDRESS = "0x7CCE3Eb018bf23e1FE2a32692f2C77592D110394";

type ChainInfo = {
  active: boolean;
  chainId: ethers.BigNumber;
  gasZRC20: string;
  registry: string; // bytes
};

type DisplayRow = {
  chainId: string;
  registryAddress: string;
};

const getEvmRpcByNetwork = (networkType: NetworkType): string => {
  const details = networkDetails[networkType];
  const rpc = details.find((d) => d.name === "EVM RPC")?.value || "";
  return rpc;
};

const formatRegistryBytesToAddress = (bytesValue: string): string => {
  if (!bytesValue || bytesValue === "0x") return "";
  // Expect bytes to be either a packed address or 32-byte left-padded address
  // Strip 0x and left pad to 64 nibbles to safely slice last 40
  const hex = bytesValue.toLowerCase().replace(/^0x/, "");
  const padded = hex.length < 64 ? hex.padStart(64, "0") : hex;
  const last40 = padded.slice(-40);
  try {
    return ethers.utils.getAddress("0x" + last40);
  } catch {
    // If not a valid address, return raw bytes
    return "0x" + hex;
  }
};

export const ContractRegistryChains = () => {
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataByNetwork, setDataByNetwork] = useState<Record<NetworkType, DisplayRow[]>>({
    mainnet: [],
    testnet: [],
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const rpcUrl = getEvmRpcByNetwork(activeTab.networkType);
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const contract = new ethers.Contract(CONTRACT_REGISTRY_ADDRESS, CONTRACT_REGISTRY.abi, provider);
        const chains: ChainInfo[] = await contract.getAllChains();

        const rows: DisplayRow[] = chains
          .filter((c) => c.active)
          .map((c) => ({
            chainId: c.chainId.toString(),
            registryAddress: formatRegistryBytesToAddress(c.registry),
          }))
          .sort((a, b) => Number(a.chainId) - Number(b.chainId));

        if (!isMounted) return;
        setDataByNetwork((prev) => ({ ...prev, [activeTab.networkType]: rows }));
      } catch (e) {
        console.error("Error fetching contract registry chains:", e);
        if (!isMounted) return;
        setDataByNetwork((prev) => ({ ...prev, [activeTab.networkType]: [] }));
        setError("Failed to load data");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [activeTab.networkType]);

  const rows = useMemo(() => dataByNetwork[activeTab.networkType], [activeTab.networkType, dataByNetwork]);

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="contract-registry-chains-" />

      {isLoading ? (
        <LoadingTable rowCount={8} />
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>
              <tr>
                <th>Chain ID</th>
                <th>Contract Registry</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={`${row.chainId}-${row.registryAddress}`}>
                  <td>{row.chainId}</td>
                  <td>{row.registryAddress || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {error ? <p className="text-red-500 mt-4">{error}</p> : null}
        </div>
      )}
    </div>
  );
};

export default ContractRegistryChains;
