import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { NetworkType } from "~/lib/app.types";

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const API: Record<NetworkType, string> = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
};

const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

export const AdminPolicy = () => {
  const [adminPolicies, setAdminPolicies] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<NetworkType>("testnet");

  useEffect(() => {
    setAdminPolicies([]);

    const baseUrl = API[activeTab];

    fetch(`${baseUrl}/zeta-chain/observer/params`)
      .then((response) => response.json())
      .then((data) => {
        const policies = data.params.admin_policy;
        policies.forEach((policy: any) => {
          fetch(`${baseUrl}/cosmos/group/v1/group_policy_info/${policy.address}`)
            .then((response) => response.json())
            .then((detailData) => {
              fetch(`${baseUrl}/cosmos/group/v1/group_members/${detailData.info.group_id}`)
                .then((response) => response.json())
                .then((membersData) => {
                  setAdminPolicies((prevPolicies) => [
                    ...prevPolicies,
                    {
                      ...detailData.info,
                      created_at: formatDate(detailData.info.created_at),
                      policy_type: capitalizeFirstLetter(policy.policy_type),
                      members: membersData.members.map((m: any) => ({
                        ...m.member,
                        addedAt: formatDate(m.member.added_at),
                      })),
                      decision_policy: detailData.info.decision_policy,
                    },
                  ]);
                });
            });
        });
      })
      .catch((error) => {
        console.error("Error fetching admin policies:", error);
      });
  }, [activeTab]);

  return (
    <div className="mt-6">
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

      {adminPolicies.length > 0 ? (
        adminPolicies.map((policy: any, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <h3 className="mt-4 mb-2 font-semibold">Policy: {policy?.policy_type}</h3>

            <div className="overflow-x-auto">
              <table>
                <tbody>
                  <tr>
                    <td>Address</td>
                    <td>{policy.address}</td>
                  </tr>
                  <tr>
                    <td>Admin</td>
                    <td>{policy.admin}</td>
                  </tr>
                  <tr>
                    <td>Created At</td>
                    <td>{policy.created_at}</td>
                  </tr>
                  <tr>
                    <td>Group ID</td>
                    <td>{policy.group_id}</td>
                  </tr>
                  <tr>
                    <td>Metadata</td>
                    <td>{policy.metadata}</td>
                  </tr>
                  <tr>
                    <td>Decision Policy Type</td>
                    <td>{policy.decision_policy["@type"].split("/").pop()}</td>
                  </tr>
                  <tr>
                    <td>Threshold</td>
                    <td>{policy.decision_policy.threshold}</td>
                  </tr>
                  <tr>
                    <td>Min Execution Period</td>
                    <td>{policy.decision_policy.windows.min_execution_period}</td>
                  </tr>
                  <tr>
                    <td>Voting Period</td>
                    <td>{policy.decision_policy.windows.voting_period}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-4 mb-2 font-semibold">Members</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Added At</th>
                    <th>Address</th>
                    <th>Metadata</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {policy.members.map((member: any, memberIndex: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr key={memberIndex}>
                      <td>{member.addedAt}</td>
                      <td>{member.address}</td>
                      <td>{member.metadata}</td>
                      <td>{member.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <Skeleton
          variant="rectangular"
          height={100}
          className="rounded mb-5 last-of-type:mb-0 bg-grey-200 dark:bg-grey-600"
        />
      )}
    </div>
  );
};
