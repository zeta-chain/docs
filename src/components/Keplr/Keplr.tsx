import React, { useEffect, useState, useCallback } from "react";

export const Keplr: React.FC<{}> = () => {
  const [isChainAdded, setChainAdded] = useState(false);
  const [chainStatusMessage, setChainStatusMessage] = useState("");

  const checkChain = useCallback(async () => {
    if (typeof window !== "undefined" && window.keplr) {
      if (window && window.keplr) {
        try {
          const key = await window.keplr.getKey("athens_7001-1");
          if (key) {
            setChainAdded(true);
            setChainStatusMessage(
              "☑️ ZetaChain Athens 3 testnet is already added to your Keplr extension."
            );
          } else {
            setChainAdded(false);
            setChainStatusMessage("ZetaChain has not been added yet");
          }
        } catch (error) {
          console.error("Error getting key:", error);
        }
      }
    } else {
      setChainAdded(false);
      setChainStatusMessage(
        "🤷‍♂️ Keplr extension not detected. Please install and return to this page to add ZetaChain to Keplr."
      );
    }
  }, []);

  const handleButtonClick = async () => {
    const chainInfo = {
      rpc: "https://zetachain-athens.blockpi.network/rpc/v1/public",
      rest: "https://zetachain-athens.blockpi.network/lcd/v1/public",
      chainId: "athens_7001-1",
      chainName: "ZetaChain Athens 3 Testnet",
      chainSymbolImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/athens_7001/chain.png",
      stakeCurrency: {
        coinDenom: "ZETA",
        coinMinimalDenom: "azeta",
        coinDecimals: 18,
      },
      nodeProvider: {
        name: "BlockPI",
        email: "help@blockpi.io",
        website: "https://blockpi.io/",
      },
      bip44: {
        coinType: 60,
      },
      bech32Config: {
        bech32PrefixAccAddr: "zeta",
        bech32PrefixAccPub: "zetapub",
        bech32PrefixValAddr: "zetavaloper",
        bech32PrefixValPub: "zetavaloperpub",
        bech32PrefixConsAddr: "ezetaalcons",
        bech32PrefixConsPub: "zetavalconspub",
      },
      currencies: [
        {
          coinDenom: "tZETA",
          coinMinimalDenom: "azeta",
          coinDecimals: 18,
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "tZETA",
          coinMinimalDenom: "azeta",
          coinDecimals: 18,
          gasPriceStep: {
            low: 80000000000,
            average: 80000000000,
            high: 80000000000,
          },
        },
      ],
      features: ["eth-address-gen", "eth-key-sign"],
    };

    if (
      typeof window !== "undefined" &&
      window.keplr &&
      window.keplr.experimentalSuggestChain
    ) {
      try {
        await window.keplr.experimentalSuggestChain(chainInfo);
        checkChain();
      } catch (error) {
        console.error("Error suggesting chain:", error);
        setChainStatusMessage(
          "Failed to suggest ZetaChain to Keplr extension."
        );
      }
    } else {
      checkChain();
      console.error("Keplr extension not detected.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkChain();
    }
  }, [checkChain]);

  return (
    <div>
      <p>{chainStatusMessage}</p>
      {typeof window !== "undefined" && !isChainAdded && window.keplr && (
        <button
          className="border border-grey-200 dark:border-grey-500 rounded p-3 hover:border-green-100 hover:dark:border-green-100 transition-[border-color]"
          onClick={handleButtonClick}
          disabled={isChainAdded}
        >
          Add ZetaChain to Keplr
        </button>
      )}
    </div>
  );
};

export default Keplr;
