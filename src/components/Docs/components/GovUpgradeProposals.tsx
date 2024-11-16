import moment from "moment";
import { GitHub, InfoOutlined } from "@mui/icons-material";
import { Box, IconButton, Modal, Tooltip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import { LoadingTable, NetworkTypeTabs, networkTypeTabs } from "~/components/shared";
import { NetworkType } from "~/lib/app.types";

const API_PROPOSALS: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.g.allthatnode.com/archive/rest/cosmos/gov/v1/proposals",
  mainnet: "https://zetachain-mainnet.g.allthatnode.com/archive/rest/cosmos/gov/v1/proposals",
};

const API_BLOCKS: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public/cosmos/base/tendermint/v1beta1/blocks/latest",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public/cosmos/base/tendermint/v1beta1/blocks/latest",
};

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  minWidth: "75%",
};

const convertIpfsLink = (link: string) => {
  const ipfsPrefix = "ipfs://";
  const gatewayPrefix = "https://ipfs.io/ipfs/";
  if (link.startsWith(ipfsPrefix)) {
    return link.replace(ipfsPrefix, gatewayPrefix);
  }
  return link;
};

export const GovUpgradeProposals = () => {
  const [mainnetProposals, setMainnetProposals] = useState<any>([]);
  const [testnetProposals, setTestnetProposals] = useState<any>([]);
  const [latestBlock, setLatestBlock] = useState<number>(0);

  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState<any>(undefined);
  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchLatestBlock = async () => {
      try {
        const response = await fetch(API_BLOCKS[activeTab.networkType]);
        const data = await response.json();
        setLatestBlock(parseInt(data.block.header.height, 10));
      } catch (error) {
        console.error("Error fetching latest block:", error);
      }
    };

    fetchLatestBlock();
  }, [activeTab.networkType]);

  useEffect(() => {
    setIsLoading(true);
    const fetchProposals = async () => {
      try {
        const response = await fetch(API_PROPOSALS[activeTab.networkType]);
        const data = await response.json();

        if (!data || !data.proposals) {
          console.error("Proposals data not found in the response");
          return;
        }

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

        if (activeTab.networkType === "mainnet") setMainnetProposals(softwareUpgradeProposals);
        if (activeTab.networkType === "testnet") setTestnetProposals(softwareUpgradeProposals);
      } catch (error) {
        console.error("Error fetching proposals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProposals();
  }, [activeTab.networkType]);

  const proposals = useMemo(() => {
    return activeTab.networkType === "mainnet" ? mainnetProposals : testnetProposals;
  }, [activeTab.networkType, mainnetProposals, testnetProposals]);

  const calculateUpgradeTime = (upgradeHeight: number) => {
    const blocksRemaining = upgradeHeight - latestBlock;
    const secondsRemaining = blocksRemaining * 5.5;
    return moment().add(secondsRemaining, "seconds").fromNow();
  };

  return (
    <div className="mt-8 first:mt-0">
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box sx={{ ...modalStyles }}>
          <pre style={{ overflow: "scroll" }}>{modalContents}</pre>
        </Box>
      </Modal>

      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="gov-up-proposal-" />

      {isLoading ? (
        <LoadingTable rowCount={8} />
      ) : (
        <div className="overflow-x-auto mt-8">
          <table>
            <thead>
              <tr>
                <th>Upgrade Name</th>
                <th>Upgrade Height</th>
                <th>Status</th>
                <th>Estimated Upgrade Time</th>
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
                  <td>{calculateUpgradeTime(proposal.plan.height)}</td>
                  <td>
                    {proposal.plan.info.startsWith("{") ? (
                      <>
                        <Tooltip title="Raw Plan Info" arrow>
                          <IconButton
                            aria-label="Raw Plan Info"
                            className="text-grey-500 dark:text-grey-300"
                            onClick={() => {
                              let plan = structuredClone(proposal.plan);
                              plan.info = JSON.parse(proposal.plan.info);
                              setModalContents(JSON.stringify(plan, null, 4));
                              setIsModalOpen(true);
                            }}
                          >
                            <InfoOutlined />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="GitHub Release" arrow>
                          <IconButton
                            aria-label="GitHub Release"
                            className="text-grey-500 dark:text-grey-300"
                            href={proposal.metadata}
                            target="_blank"
                          >
                            <GitHub />
                          </IconButton>
                        </Tooltip>
                      </>
                    ) : (
                      <>
                        <Tooltip title="Plan Info" arrow>
                          <IconButton
                            aria-label="Plan Info"
                            className="text-grey-500 dark:text-grey-300"
                            href={convertIpfsLink(proposal.plan.info)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <InfoOutlined />
                          </IconButton>
                        </Tooltip>
                      </>
                    )}
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
