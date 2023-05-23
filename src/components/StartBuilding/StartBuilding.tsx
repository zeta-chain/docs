import Link from "@docusaurus/Link";
import React from "react";

const StartBuildingItem = ({ title, description, link }: { title: string; description: string; link: string }) => {
  return (
    <Link
      className="dark:bg-grey-900 bg-grey-50 p-3 px-4 rounded-md border dark:border-grey-700 border-grey-200 hover:bg-grey-100 dark:hover:bg-grey-700 transition-all"
      to={link}
    >
      <h4 className="text-md font-semibold mb-2 dark:text-white text-grey-400">{title}</h4>
      <p className="text-grey-300">{description}</p>
    </Link>
  );
};

export const StartBuilding = () => {
  return (
    <div className="bg-grey-100 dark:bg-grey-800 rounded-lg p-6">
      <h2 className="mb-4 dark:text-white text-grey-600">Start Building</h2>
      <p className="dark:text-grey-300 text-grey-500 mb-4">
        Check one of our examples with real code to build your own omnichain messaging applications using
        ZetaChain&apos;s Connector.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <StartBuildingItem
          title="Your First Cross-Chain Message"
          description="15 minutes"
          link="/developers/cross-chain-messaging/examples/hello-world"
        />
        <StartBuildingItem
          title="Multichain Value Transfer"
          description="45 minutes"
          link="/developers/cross-chain-messaging/examples/multichain-value-transfer"
        />
        <StartBuildingItem
          title="Cross-Chain Counter"
          description="25 minutes"
          link="/developers/cross-chain-messaging/examples/cross-chain-counter"
        />
        <StartBuildingItem
          title="Cross-Chain NFT"
          description="45 minutes"
          link="/developers/cross-chain-messaging/examples/cross-chain-nft"
        />
        <StartBuildingItem
          title="Multi-Chain Swap"
          description="45 minutes"
          link="/developers/cross-chain-messaging/examples/multi-chain-swap"
        />
      </div>
    </div>
  );
};
