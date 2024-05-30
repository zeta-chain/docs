import { Skeleton } from "@mui/material";
import { bech32 } from "bech32";
import { useCallback, useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

const APIs: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
};

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

const activeStyles = { fontWeight: "bold", textDecoration: "underline" };
const inactiveStyles = { fontWeight: "normal", textDecoration: "none" };

export const ObserverList = () => {
  const [observers, setObservers] = useState<any>([]);
  const [validators, setValidators] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  const fetchObservers = useCallback(async () => {
    setIsLoading(true);
    try {
      const api = APIs[activeTab];
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
  }, [activeTab]);

  const fetchValidators = useCallback(
    async (key = "") => {
      setIsLoading(true);

      try {
        const api = APIs[activeTab];
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
    [activeTab]
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
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? activeStyles : inactiveStyles}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? activeStyles : inactiveStyles}
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
