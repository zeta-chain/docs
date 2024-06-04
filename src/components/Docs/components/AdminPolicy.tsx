import { useEffect, useState } from "react";

import { LoadingTable, NavTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

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

export const AdminPolicy = () => {
  const [adminPolicies, setAdminPolicies] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    setAdminPolicies([]);

    const baseUrl = rpcByNetworkType[activeTab.networkType];

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
  }, [activeTab.networkType]);

  return (
    <div className="mt-8">
      <NavTabs tabs={networkTypeTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {adminPolicies.length > 0 ? (
        adminPolicies.map((policy: any, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <h3 className="text-xl mt-8 font-medium">Policy: {policy?.policy_type}</h3>

            <div className="overflow-x-auto mt-8">
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

            <h3 className="text-xl mt-8 font-medium">Members</h3>

            <div className="overflow-x-auto mt-8">
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
        <LoadingTable rowCount={9} />
      )}
    </div>
  );
};
