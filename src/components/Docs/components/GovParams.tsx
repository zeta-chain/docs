import { useCallback, useEffect, useMemo, useState } from "react";

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

const tabs = [
  { label: "Mainnet", networkType: "mainnet" },
  { label: "Testnet", networkType: "testnet" },
];

export const GovParams = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [mainnetGovAddress, setMainnetGovAddress] = useState("");
  const [mainnetVotingParams, setMainnetVotingParams] = useState<VotingParams | {}>({});
  const [mainnetDepositParams, setMainnetDepositParams] = useState<DepositParams | {}>({});
  const [mainnetTallyingParams, setMainnetTallyingParams] = useState<TallyParams | {}>({});

  const [testnetGovAddress, setTestnetGovAddress] = useState("");
  const [testnetVotingParams, setTestnetVotingParams] = useState<VotingParams | {}>({});
  const [testnetDepositParams, setTestnetDepositParams] = useState<DepositParams | {}>({});
  const [testnetTallyingParams, setTestnetTallyingParams] = useState<TallyParams | {}>({});

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const rpcByNetworkType: Record<string, string> = {
      mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
      testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
    };

    const baseUrl = rpcByNetworkType[activeTab.networkType];

    try {
      // Fetch gov account address
      const accountsResponse = await fetch(`${baseUrl}/cosmos/auth/v1beta1/module_accounts`);

      if (!accountsResponse.ok) {
        throw new Error(`HTTP error! status: ${accountsResponse.status}`);
      }

      const accountsData: AccountsData = await accountsResponse.json();

      const govAccount = accountsData.accounts.find((account) => account.name === "gov");

      if (activeTab.networkType === "mainnet") setMainnetGovAddress(govAccount?.base_account?.address || "Not found");
      if (activeTab.networkType === "testnet") setTestnetGovAddress(govAccount?.base_account?.address || "Not found");

      // Fetch voting parameters
      const votingResponse = await fetch(`${baseUrl}/cosmos/gov/v1beta1/params/voting`);

      if (!votingResponse.ok) {
        throw new Error(`HTTP error! status: ${votingResponse.status}`);
      }

      const votingData: VotingData = await votingResponse.json();

      if (activeTab.networkType === "mainnet") setMainnetVotingParams(votingData.voting_params);
      if (activeTab.networkType === "testnet") setTestnetVotingParams(votingData.voting_params);

      // Fetch deposit parameters
      const depositResponse = await fetch(`${baseUrl}/cosmos/gov/v1beta1/params/deposit`);

      if (!depositResponse.ok) {
        throw new Error(`HTTP error! status: ${depositResponse.status}`);
      }

      const depositData: DepositData = await depositResponse.json();

      if (activeTab.networkType === "mainnet") setMainnetDepositParams(depositData.deposit_params);
      if (activeTab.networkType === "testnet") setTestnetDepositParams(depositData.deposit_params);

      // Fetch tallying parameters
      const tallyingResponse = await fetch(`${baseUrl}/cosmos/gov/v1beta1/params/tallying`);

      if (!tallyingResponse.ok) {
        throw new Error(`HTTP error! status: ${tallyingResponse.status}`);
      }

      const tallyingData: TallyingData = await tallyingResponse.json();

      if (activeTab.networkType === "mainnet") setMainnetTallyingParams(tallyingData.tally_params);
      if (activeTab.networkType === "testnet") setTestnetTallyingParams(tallyingData.tally_params);
    } catch (error) {
      console.error("Error fetching data:", error);

      if (activeTab.networkType === "mainnet") {
        setMainnetGovAddress("Error fetching address");
        setMainnetVotingParams({});
        setMainnetDepositParams({});
        setMainnetTallyingParams({});
      }

      if (activeTab.networkType === "testnet") {
        setTestnetGovAddress("Error fetching address");
        setTestnetVotingParams({});
        setTestnetDepositParams({});
        setTestnetTallyingParams({});
      }
    } finally {
      setIsLoading(false);
    }
  }, [activeTab.networkType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const govAddress = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetGovAddress : testnetGovAddress;
  }, [activeTab.networkType, mainnetGovAddress, testnetGovAddress]);

  const votingParams = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetVotingParams : testnetVotingParams;
  }, [activeTab.networkType, mainnetVotingParams, testnetVotingParams]) as VotingParams;

  const depositParams = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetDepositParams : testnetDepositParams;
  }, [activeTab.networkType, mainnetDepositParams, testnetDepositParams]) as DepositParams;

  const tallyingParams = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetTallyingParams : testnetTallyingParams;
  }, [activeTab.networkType, mainnetTallyingParams, testnetTallyingParams]) as TallyParams;

  return (
    <div className="mt-8 first:mt-0">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.networkType}
            onClick={() => setActiveTab(tab)}
            className={activeTab.networkType === tab.networkType ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto mt-8">
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
