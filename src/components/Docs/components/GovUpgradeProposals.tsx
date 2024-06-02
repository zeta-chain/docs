import { useEffect, useState } from "react";

import { LoadingTable, NavTabs, networkTypeTabs } from "~/components/shared";
import { NetworkType } from "~/lib/app.types";

const API: Record<NetworkType, string> = {
  testnet: "https://zetachain-testnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
  mainnet: "https://zetachain-mainnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
};

const convertIpfsLink = (link: string, metadata: string) => {
  const ipfsPrefix = "ipfs://";
  const gatewayPrefix = "https://ipfs.io/ipfs/";

  if (link.startsWith(ipfsPrefix)) return link.replace(ipfsPrefix, gatewayPrefix);
  if (link.startsWith("https://")) return link;

  if (metadata.startsWith(ipfsPrefix)) return metadata.replace(ipfsPrefix, gatewayPrefix);
  if (metadata.startsWith("https://")) return metadata;

  return link;
};

export const GovUpgradeProposals = () => {
  const [proposals, setProposals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(API[activeTab.networkType]);
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
            plan: proposal.messages.find((msg: any) => msg["@type"].includes("MsgSoftwareUpgrade"))?.plan || {},
            status: proposal.status.replace("PROPOSAL_STATUS_", "").replace(/_/g, " ").toLowerCase(),
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
  }, [activeTab.networkType]);

  return (
    <div className="mt-8">
      <NavTabs tabs={networkTypeTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <LoadingTable rowCount={8} />
      ) : (
        <div className="overflow-x-auto mt-8">
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
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                  <td>{proposal.plan.name}</td>
                  <td>{proposal.plan.height}</td>
                  <td>{proposal.status}</td>
                  <td>
                    <a
                      href={convertIpfsLink(proposal.plan.info, proposal.metadata)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {convertIpfsLink(proposal.plan.info, proposal.metadata)}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
