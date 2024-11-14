import { useEffect, useState, Fragment } from "react";
import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";
import { NetworkType } from "~/lib/app.types";

type ChainParamData = {
  chain_id: string;
  zeta_token_contract_address: string;
  connector_contract_address: string;
  erc20_custody_contract_address: string;
  gateway_address: string;
  is_supported: boolean;
};

type ChainInfo = {
  chain_id: string;
  chain_name: string;
  consensus: string;
};

type ContractAddressesByChain = Record<string, ChainParamData[]>;

const addressesUrl: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/observer/get_chain_params",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public/zeta-chain/observer/get_chain_params",
};

const chainNamesUrl: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/observer/supportedChains",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public/zeta-chain/observer/supportedChains",
};

const tssAddressUrl: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/observer/get_tss_address/18332",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public/zeta-chain/observer/get_tss_address/8332",
};

const groupDataByChain = (data: ChainParamData[], chainNamesMap: Record<string, { name: string; consensus: string }>) =>
  data.reduce((acc, item) => {
    if (item.is_supported) {
      const chainInfo = chainNamesMap[item.chain_id];
      const chainName = chainInfo?.name || `Chain ${item.chain_id}`;
      (acc[chainName] = acc[chainName] || []).push({ ...item, consensus: chainInfo?.consensus });
    }
    return acc;
  }, {} as ContractAddressesByChain);

const formatLabel = (key: string) =>
  key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/Zeta/g, "ZETA")
    .replace(/Erc20/g, "ERC-20")
    .replace(/ Contract Address$/, "")
    .replace(/ Address$/, "");

export const ContractAddresses = () => {
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [groupedData, setGroupedData] = useState<Record<NetworkType, ContractAddressesByChain>>({
    testnet: {},
    mainnet: {},
  });
  const [ethTssAddress, setEthTssAddress] = useState<string>("");
  const [btcTssAddress, setBtcTssAddress] = useState<string>("");

  useEffect(() => {
    const fetchAndGroupAddresses = async () => {
      setIsLoading(true);

      const [addressesResponse, chainNamesResponse, tssAddressResponse] = await Promise.all([
        fetch(addressesUrl[activeTab.networkType]),
        fetch(chainNamesUrl[activeTab.networkType]),
        fetch(tssAddressUrl[activeTab.networkType]),
      ]);

      const addressesData: { chain_params: { chain_params: ChainParamData[] } } = await addressesResponse.json();
      const chainNamesData: { chains: ChainInfo[] } = await chainNamesResponse.json();
      const tssAddressData: { eth: string; btc: string } = await tssAddressResponse.json();

      const chainNamesMap = chainNamesData.chains.reduce(
        (acc, chain) => ({ ...acc, [chain.chain_id]: { name: chain.chain_name, consensus: chain.consensus } }),
        {} as Record<string, { name: string; consensus: string }>
      );

      setGroupedData((prevData) => ({
        ...prevData,
        [activeTab.networkType]: groupDataByChain(addressesData.chain_params.chain_params, chainNamesMap),
      }));

      setEthTssAddress(tssAddressData.eth);
      setBtcTssAddress(tssAddressData.btc);
      setIsLoading(false);
    };

    fetchAndGroupAddresses();
  }, [activeTab]);

  const selectedKeys = [
    "zeta_token_contract_address",
    "connector_contract_address",
    "erc20_custody_contract_address",
    "gateway_address",
  ];

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="contract-addresses-" />

      {isLoading ? (
        <LoadingTable rowCount={12} />
      ) : (
        Object.entries(groupedData[activeTab.networkType]).map(([chainName, contracts]) => (
          <div key={chainName}>
            <h3 className="text-xl mt-8 font-medium">{chainName}</h3>

            <div className="overflow-x-auto mt-8">
              <table>
                <thead>
                  <tr>
                    <th>Contract Type</th>
                    <th>Address</th>
                  </tr>
                </thead>

                <tbody>
                  {contracts.map((contract, index) => (
                    <Fragment key={index}>
                      {selectedKeys
                        .filter(
                          (key) =>
                            contract[key as keyof ChainParamData] &&
                            contract[key as keyof ChainParamData] !== "0x0000000000000000000000000000000000000000"
                        )
                        .map((key) => (
                          <tr key={key}>
                            <td>{formatLabel(key)}</td>
                            <td>{contract[key as keyof ChainParamData]}</td>
                          </tr>
                        ))}
                      {chainName.toLowerCase().includes("btc") && btcTssAddress && (
                        <tr>
                          <td>Gateway (TSS)</td>
                          <td>{btcTssAddress}</td>
                        </tr>
                      )}
                      {contract.consensus === "ethereum" && ethTssAddress && (
                        <tr>
                          <td>TSS</td>
                          <td>{ethTssAddress}</td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}

      <p className="mt-4">
        Source:{" "}
        <a
          href={addressesUrl[activeTab.networkType]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A5C6] dark:text-[#B0FF61]"
        >
          {addressesUrl[activeTab.networkType]}
        </a>
      </p>
    </div>
  );
};
