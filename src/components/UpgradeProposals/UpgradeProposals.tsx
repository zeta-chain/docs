import React, { useState, useEffect } from "react";

const UpgradeProposals = () => {
  const [latestProposal, setLatestProposal] = useState<any>(null);
  const [latestHeight, setLatestHeight] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchLatestHeight = async () => {
      try {
        const response = await fetch(
          "https://zetachain-athens.blockpi.network/lcd/v1/public/cosmos/base/tendermint/v1beta1/blocks/latest"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch latest block height");
        }
        const data = await response.json();
        setLatestHeight(parseInt(data.block.header.height));
      } catch (error) {
        setError(error);
      }
    };

    const calculateUpgradeTime = () => {
      const blocksUntilUpgrade =
        latestProposal.content.plan.height - latestHeight;
      const secondsUntilUpgrade = blocksUntilUpgrade * 7;
      const daysUntilUpgrade = secondsUntilUpgrade / (24 * 60 * 60);
      return daysUntilUpgrade.toFixed(2);
    };

    const fetchProposals = async () => {
      try {
        const response = await fetch(
          "https://zetachain-athens.blockpi.network/lcd/v1/public/cosmos/gov/v1beta1/proposals?pagination.reverse=true&proposal_status=3"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const sortedProposals = data.proposals
          .filter(
            (proposal: any) =>
              proposal.content["@type"] ===
              "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal"
          )
          .sort(
            (a: any, b: any) =>
              parseInt(b.proposal_id) - parseInt(a.proposal_id)
          );

        if (sortedProposals.length > 0) {
          const highestProposalId = sortedProposals[0];
          if (parseInt(sortedProposals[0].content.plan.height) > latestHeight) {
            setLatestProposal(highestProposalId);
          }
        } else {
          setLatestProposal(null);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchLatestHeight().then(fetchProposals);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // if (!latestProposal) {
  //   return <div>There are no planned upgrade proposals.</div>;
  // }

  return (
    <div>
      <h2>Upcoming Software Upgrade</h2>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Version</td>
            <td>{latestProposal.content.title}</td>
          </tr>
          <tr>
            <td>Upgrade Height</td>
            <td>{latestProposal.content.plan.height} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpgradeProposals;
