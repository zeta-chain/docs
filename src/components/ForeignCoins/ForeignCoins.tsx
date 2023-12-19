import React, { useState, useEffect } from "react";

const COINS_URL =
  "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/zetacore/fungible/foreign_coins";
const CHAINS_URL =
  "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/observer/supportedChains";

const ForeignCoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCoins = await fetch(COINS_URL);
        const coinsData = await responseCoins.json();
        const responseChains = await fetch(CHAINS_URL);
        const chainsData = await responseChains.json();

        const chainIdToName = chainsData.chains.reduce(
          (acc: any, chain: any) => {
            acc[chain.chain_id] = formatString(chain.chain_name);
            return acc;
          },
          {}
        );

        const enrichedCoins = coinsData.foreignCoins.map((coin: any) => ({
          ...coin,
          chainName: chainIdToName[coin.foreign_chain_id] || "Unknown",
        }));

        const sortedCoins = enrichedCoins.sort((a, b) =>
          a.chainName.localeCompare(b.chainName)
        );
        setCoins(sortedCoins);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatString = (str: any) => {
    return str
      .split("_")
      .map((word: any) =>
        word.length <= 3
          ? word.toUpperCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Chain</th>
            <th>Symbol</th>
            <th>Type</th>
            <th>ZRC-20 on ZetaChain</th>
            <th>ERC-20 on Connected Chain</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin: any, index) => (
            <tr key={index}>
              <td>{coin.chainName}</td>
              <td>{coin.symbol}</td>
              <td>{coin.coin_type}</td>
              <td>{coin.zrc20_contract_address}</td>
              <td>{coin.asset}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginBottom: "1rem" }}>
        Source:{" "}
        <a href={COINS_URL} target="_blank" rel="noopener noreferrer">
          {COINS_URL}
        </a>
      </p>
    </div>
  );
};

export default ForeignCoinsTable;
