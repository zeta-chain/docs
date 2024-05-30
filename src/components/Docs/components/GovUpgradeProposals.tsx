import { GitHub, InfoOutlined } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Modal, Skeleton, Toolbar, Tooltip } from "@mui/material";
import { Code } from "nextra/components";
import React from "react";
import { useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

const API: Record<NetworkType, string> = {
  testnet: "https://zetachain-testnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
  mainnet: "https://zetachain-mainnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
};

const modalStyles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  minWidth: "75%",
};

export const GovUpgradeProposals = () => {
  const [proposals, setProposals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContents, setModalContents] = useState<any>(undefined);
  const handleModelClose = () => setIsModalOpen(false);

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
    <div className="mt-6">
      <Modal
        open={isModalOpen}
        onClose={handleModelClose}
      >
        <Box sx={{...modalStyles}}>
          <pre style={{overflow: "scroll"}}>
            {modalContents}
          </pre>
        </Box>
      </Modal>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          type="button"
          style={activeTab === "testnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>

        <button
          type="button"
          style={activeTab === "mainnet" ? activeStyle : inactiveStyle}
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
        <div className="overflow-auto">
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
                    {proposal.plan.info.startsWith("{") ? (
                      <>
                        <Tooltip title="Raw Plan Info" arrow>
                          <IconButton aria-label="Raw Plan Info" className="text-grey-500 dark:text-grey-300" onClick={() => {
                            let plan = structuredClone(proposal.plan)
                            plan.info = JSON.parse(proposal.plan.info);
                            setModalContents(JSON.stringify(plan, null, 4))
                            setIsModalOpen(true)
                          }}>
                            <InfoOutlined />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Github Release" arrow>
                        <IconButton aria-label="Github Release" className="text-grey-500 dark:text-grey-300" href={proposal.metadata} target="_blank">
                          <GitHub />
                        </IconButton>
                        </Tooltip>
                      </>
                    ) : (
                      <>
                      <Tooltip title="Plan Info" arrow>
                        <IconButton aria-label="Plan Info" className="text-grey-500 dark:text-grey-300" href={convertIpfsLink(proposal.plan.info)} rel="noopener noreferrer">
                          <InfoOutlined />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Github Release" arrow>
                      <IconButton aria-label="Github Release" className="text-grey-500 dark:text-grey-300" href={proposal.metadata} target="_blank">
                        <GitHub />
                      </IconButton>
                      </Tooltip>
                    </>
                    )
                    }
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
