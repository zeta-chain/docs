import React, { useState, useEffect } from "react";

const API: any = {
  testnet:
    "https://zetachain-testnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
  mainnet:
    "https://zetachain-mainnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
};

const GovUpgradeProposals = () => {
  const [proposals, setProposals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("testnet");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(API[activeTab]);
        const data = await response.json();
        const softwareUpgradeProposals = data.proposals
          .filter(
            (proposal: any) =>
              proposal.status === "PROPOSAL_STATUS_PASSED" ||
              proposal.status === "PROPOSAL_STATUS_VOTING_PERIOD" ||
              proposal.status === "PROPOSAL_STATUS_DEPOSIT_PERIOD"
          )
          .map((proposal: any) => ({
            ...proposal,
            plan:
              proposal.messages.find((msg: any) =>
                msg["@type"].includes("MsgSoftwareUpgrade")
              )?.plan || {},
            status: proposal.status
              .replace("PROPOSAL_STATUS_", "")
              .replace(/_/g, " ")
              .toLowerCase(),
          }))
          .filter((proposal: any) => proposal.plan.name)
          .sort((a: any, b: any) => b.plan.height - a.plan.height);

        setProposals(softwareUpgradeProposals);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
  const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

  const convertIpfsLink = (link: string) => {
    const ipfsPrefix = "ipfs://";
    const gatewayPrefix = "https://ipfs.io/ipfs/";
    if (link.startsWith(ipfsPrefix)) {
      return link.replace(ipfsPrefix, gatewayPrefix);
    }
    return link;
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={activeTab === "testnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={activeTab === "mainnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ZetaChain Version</th>
              <th>Upgrade Height</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal: any, index: any) => (
              <tr key={index}>
                <td>{proposal.plan.name}</td>
                <td>{proposal.plan.height}</td>
                <td>{proposal.status}</td>
                <td>
                  <a
                    href={convertIpfsLink(proposal.plan.info)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {convertIpfsLink(proposal.plan.info)}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GovUpgradeProposals;
