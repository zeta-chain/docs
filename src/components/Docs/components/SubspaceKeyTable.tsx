import { Skeleton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

type Subspace = {
  subspace: string;
  keys: string[];
};

type SubspacesData = {
  subspaces: Subspace[];
};

export const SubspaceKeyTable = () => {
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");
  const [subspacesData, setSubspacesData] = useState<Subspace[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const baseUrl =
      activeTab === "testnet"
        ? "https://zetachain-athens.blockpi.network/lcd/v1/public"
        : "https://zetachain.blockpi.network/lcd/v1/public";
    const url = `${baseUrl}/cosmos/params/v1beta1/subspaces`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: SubspacesData = await response.json();

      setSubspacesData(data.subspaces);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSubspacesData([]);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="mt-6">
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? { fontWeight: "bold", textDecoration: "underline" } : {}}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? { fontWeight: "bold", textDecoration: "underline" } : {}}
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
                <th>Subspace</th>
                <th>Key</th>
              </tr>
            </thead>

            <tbody>
              {subspacesData.map(
                (subspace) =>
                  subspace.keys.length > 0 &&
                  subspace.keys.map((key) => (
                    <tr key={`${subspace.subspace}-${key}`}>
                      <td>{subspace.subspace}</td>
                      <td>{key}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
