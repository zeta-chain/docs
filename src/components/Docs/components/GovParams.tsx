import { Skeleton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

type AccountsData = {
  accounts: {
    name: string;
    base_account: {
      address: string;
    };
  }[];
};

type VotingParams = {
  voting_period: string;
};

type VotingData = {
  voting_params: VotingParams;
};

type DepositParams = {
  max_deposit_period: string;
  min_deposit: {
    amount: string;
    denom: string;
  }[];
};

type DepositData = {
  deposit_params: DepositParams;
};

type TallyParams = {
  quorum: string;
  threshold: string;
  veto_threshold: string;
};

type TallyingData = {
  tally_params: TallyParams;
};

export const GovParams = () => {
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");
  const [govAddress, setGovAddress] = useState("");
  const [votingParams, setVotingParams] = useState<VotingParams | {}>({});
  const [depositParams, setDepositParams] = useState<DepositParams | {}>({});
  const [tallyingParams, setTallyingParams] = useState<TallyParams | {}>({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const baseUrl =
      activeTab === "testnet"
        ? "https://zetachain-athens.blockpi.network/lcd/v1/public"
        : "https://zetachain.blockpi.network/lcd/v1/public";

    try {
      // Fetch gov account address
      const accountsResponse = await fetch(`${baseUrl}/cosmos/auth/v1beta1/module_accounts`);

      if (!accountsResponse.ok) {
        throw new Error(`HTTP error! status: ${accountsResponse.status}`);
      }

      const accountsData: AccountsData = await accountsResponse.json();

      const govAccount = accountsData.accounts.find((account) => account.name === "gov");

      setGovAddress(govAccount?.base_account?.address || "Not found");

      // Fetch voting parameters
      const votingResponse = await fetch(`${baseUrl}/cosmos/gov/v1beta1/params/voting`);

      if (!votingResponse.ok) {
        throw new Error(`HTTP error! status: ${votingResponse.status}`);
      }

      const votingData: VotingData = await votingResponse.json();

      setVotingParams(votingData.voting_params);

      // Fetch deposit parameters
      const depositResponse = await fetch(`${baseUrl}/cosmos/gov/v1beta1/params/deposit`);

      if (!depositResponse.ok) {
        throw new Error(`HTTP error! status: ${depositResponse.status}`);
      }

      const depositData: DepositData = await depositResponse.json();

      setDepositParams(depositData.deposit_params);

      // Fetch tallying parameters
      const tallyingResponse = await fetch(`${baseUrl}/cosmos/gov/v1beta1/params/tallying`);

      if (!tallyingResponse.ok) {
        throw new Error(`HTTP error! status: ${tallyingResponse.status}`);
      }

      const tallyingData: TallyingData = await tallyingResponse.json();

      setTallyingParams(tallyingData.tally_params);
    } catch (error) {
      console.error("Error fetching data:", error);
      setGovAddress("Error fetching address");
      setVotingParams({});
      setDepositParams({});
      setTallyingParams({});
    } finally {
      setIsLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="mt-8">
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
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Gov Module Address (authority)</td>
                <td>{govAddress}</td>
              </tr>

              {Object.entries(depositParams).map(([key, value]) => (
                <tr key={key}>
                  <td>Deposit: {key.replace(/_/g, " ")}</td>
                  <td>{Array.isArray(value) ? value.map((v) => `${v.amount} ${v.denom}`).join(", ") : value}</td>
                </tr>
              ))}

              {Object.entries(votingParams).map(([key, value]) => (
                <tr key={key}>
                  <td>Voting: {key.replace(/_/g, " ")}</td>
                  <td>{value}</td>
                </tr>
              ))}

              {Object.entries(tallyingParams).map(([key, value]) => (
                <tr key={key}>
                  <td>Tallying: {key.replace(/_/g, " ")}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
