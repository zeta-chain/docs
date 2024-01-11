import React, { useState, useEffect } from "react";

interface Chain {
  chain_id: string;
  chain_name: string;
}

interface ObserverParams {
  ballot_threshold: string;
  chain: Chain;
  is_supported: boolean;
  min_observer_delegation: string;
}

const API =
  "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/observer/params";

const ObserverParams = () => {
  const [data, setData] = useState<ObserverParams[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        setData(json.params.observer_params);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Chain Name</th>
                <th>Min Observer Delegation</th>
                <th>Ballot Threshold</th>
                <th>Is Supported</th>
              </tr>
            </thead>
            <tbody>
              {data.map((observerParam, index) => (
                <tr key={index}>
                  <td>{observerParam.chain.chain_name}</td>
                  <td>{parseInt(observerParam.min_observer_delegation)}</td>
                  <td>{parseFloat(observerParam.ballot_threshold) * 100}%</td>
                  <td>{observerParam.is_supported ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          Source:&nbsp;
          <a href={API} target="_blank" rel="noopener noreferrer">
            {API}
          </a>
        </div>
      )}
    </div>
  );
};

export default ObserverParams;
