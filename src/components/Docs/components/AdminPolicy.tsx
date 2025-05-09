import { useEffect, useState } from "react";

import { NetworkTypeTabs, networkTypeTabs, rpcByNetworkType } from "~/components/shared";

interface Authorization {
  msg_url: string;
  authorized_policy: string;
}

interface AuthorizationResponse {
  authorization_list: {
    authorizations: Authorization[];
  };
}

interface Policy {
  policy_type: string;
  address: string;
}

interface PoliciesResponse {
  policies: {
    items: Policy[];
  };
}

export const AdminPolicy = () => {
  const [authorizations, setAuthorizations] = useState<Authorization[]>([]);
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [activeTab, setActiveTab] = useState(networkTypeTabs[0]);

  useEffect(() => {
    const baseUrl = rpcByNetworkType[activeTab.networkType];

    // Fetch authorizations
    fetch(`${baseUrl}/zeta-chain/authority/authorizations`)
      .then((response) => response.json())
      .then((data: AuthorizationResponse) => {
        setAuthorizations(data.authorization_list.authorizations);
      })
      .catch((error) => {
        console.error("Error fetching authorizations:", error);
      });

    // Fetch policies
    fetch(`${baseUrl}/zeta-chain/authority/policies`)
      .then((response) => response.json())
      .then((data: PoliciesResponse) => {
        setPolicies(data.policies.items);
      })
      .catch((error) => {
        console.error("Error fetching policies:", error);
      });
  }, [activeTab.networkType]);

  const groupedAuthorizations = authorizations.reduce((acc, auth) => {
    const group = auth.authorized_policy;
    if (!acc[group]) {
      acc[group] = [];
    }
    const cleanMsg = auth.msg_url.replace("/zetachain.zetacore.", "");
    acc[group].push(cleanMsg);
    return acc;
  }, {} as Record<string, string[]>);

  const getPolicyAddress = (policyType: string) => {
    const policy = policies.find((p) => p.policy_type === policyType);
    return policy?.address || "";
  };

  const formatGroupName = (group: string) => {
    return `Group Policy "${group.replace("group", "")}"`;
  };

  const formatModuleName = (module: string) => {
    return `${module.charAt(0).toUpperCase() + module.slice(1)} Module`;
  };

  const groupByModule = (messages: string[]) => {
    return messages.reduce((acc, msg) => {
      const module = msg.split(".")[0];
      if (!acc[module]) {
        acc[module] = [];
      }
      acc[module].push(msg);
      return acc;
    }, {} as Record<string, string[]>);
  };

  return (
    <div className="mt-8 first:mt-0">
      <NetworkTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="admin-policy-" />

      <div className="mt-8 space-y-8">
        {Object.entries(groupedAuthorizations).map(([group, messages]) => {
          const moduleGroups = groupByModule(messages);
          return (
            <div key={group}>
              <h2 className="text-2xl font-medium mb-2">{formatGroupName(group)}</h2>
              <div className="text-sm text-gray-500 mb-4">Address: {getPolicyAddress(group)}</div>
              <div className="space-y-4">
                {Object.entries(moduleGroups).map(([module, msgs]) => (
                  <div key={module}>
                    <h3 className="text-lg font-medium mb-2">{formatModuleName(module)}</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {msgs.map((msg, index) => (
                        <li key={index} className="text-sm">
                          {msg.split(".")[1]}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
