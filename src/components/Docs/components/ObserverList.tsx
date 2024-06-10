import { bech32 } from "bech32";
import { useCallback, useEffect, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

const convertToValoper = (address: any) => {
  try {
    const decoded = bech32.decode(address);
    if (decoded.prefix === "zeta") {
      return bech32.encode("zetavaloper", decoded.words);
    }
  } catch (error) {
    console.error("Error converting address:", error);
  }
  return address;
};

export const ObserverList = () => {
  const [observers, setObservers] = useState<any>([]);
  const [validators, setValidators] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  const fetchObservers = useCallback(async () => {
    setIsLoading(true);
    try {
      const api = rpcByNetworkType[activeTab.networkType];
      const response = await fetch(`${api}/zeta-chain/observer/nodeAccount`);
      const data = await response.json();
      const processedData = data.NodeAccount.map((observer: any) => ({
        ...observer,
        valoperAddress: convertToValoper(observer.operator),
      }));
      setObservers(processedData || []);
    } catch (error) {
      console.error("Error fetching observer validators:", error);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab.networkType]);

  const fetchValidators = useCallback(
    async (key = "") => {
      setIsLoading(true);

      try {
        const api = rpcByNetworkType[activeTab.networkType];
        const endpoint = "/cosmos/staking/v1beta1/validators";
        const query = key ? `pagination.key=${encodeURIComponent(key)}` : "";
        const url = `${api}${endpoint}?${query}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.validators) {
          setValidators((prev: any) => [...prev, ...data.validators]);

          if (data.pagination && data.pagination.next_key) {
            await fetchValidators(data.pagination.next_key);
          }
        }
      } catch (error) {
        console.error("Error fetching validators:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [activeTab.networkType]
  );

  useEffect(() => {
    setObservers([]);
    setValidators([]);
    fetchObservers();
    fetchValidators();
  }, [fetchObservers, fetchValidators]);

  const findMoniker = useCallback(
    (valoperAddress: any) => {
      const validator = validators.find((v: any) => v.operator_address === valoperAddress);
      return validator ? validator.description : { moniker: "Unknown", website: "", details: "" };
    },
    [validators]
  );

  const sortObserversByMoniker = useCallback(() => {
    return observers.sort((a: any, b: any) => {
      const monikerA = findMoniker(a.valoperAddress).moniker || "";
      const monikerB = findMoniker(b.valoperAddress).moniker || "";

      return monikerA.localeCompare(monikerB);
    });
  }, [findMoniker, observers]);

  return (
    <div className="mt-8">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <LoadingTable rowCount={9} />
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>
              <tr>
                <th>Observer</th>
                <th>Moniker</th>
              </tr>
            </thead>
            <tbody>
              {sortObserversByMoniker().map((observer: any, index: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                  <td>
                    {observer.operator}
                    <br />
                    {observer.valoperAddress}
                  </td>
                  <td>{findMoniker(observer.valoperAddress).moniker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
