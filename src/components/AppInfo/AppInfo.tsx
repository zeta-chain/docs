import React, { useState, useEffect } from "react";

const API =
  "https://zetachain-athens.blockpi.network/lcd/v1/public/cosmos/base/tendermint/v1beta1/node_info";

const AppInfo = () => {
  const [appInfo, setAppInfo] = useState({ version: "", gitCommit: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API);
        const data = await response.json();
        setAppInfo({
          version: data.application_version.version,
          gitCommit: data.application_version.git_commit,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
            <td>
              <a
                href={`https://github.com/zeta-chain/node/releases/tag/${appInfo.version}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {appInfo.version}
              </a>
            </td>
          </tr>
          {appInfo.gitCommit && (
            <tr>
              <td>Git Commit Hash</td>
              <td>{appInfo.gitCommit}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppInfo;
