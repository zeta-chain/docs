import { IconArticleRandom, IconDocs, PrimaryLink } from "../../shared";

type KeyFeature = {
  title: string;
  description: string;
  link?: React.ReactNode;
};

const keyFeatures: KeyFeature[] = [
  {
    title: "Decentralized and public",
    description:
      "ZetaChain is a decentralized and public blockchain network. It is built on Cosmos SDK and Tendermint Consensus. While many cross-chain solutions like bridges have to vary, often centralized trust models that have a track record for being susceptible to exploits and hacks, ZetaChain is a Proof-of-Stake blockchain, where all transactions and activity on the platform – even cross-chain transactions – are fully transparent, verifiable, and function in a trust-minimized manner.",
  },
  {
    title: "Hyper-connected nodes",
    description:
      "ZetaChain's nodes have observers that monitor transactions on every connected chain. Through ZetaChain's TSS architecture, the network can sign and verify transactions on every connected chain as a wallet can. By being able to read and write to connected chains in a secure, decentralized manner, these hyper-connected nodes provide a seamless omnichain environment for developers to build novel and powerful cross-chain applications on top of.",
  },
  {
    title: "Omnichain smart contracts",
    description:
      "Smart contracts can be deployed natively on ZetaChain that can read/write to connected chains. ZetaChain is the only public blockchain to support smart contracts with this capability, enabling a new paradigm of app development.",
  },
  {
    title: "Cross-chain message passing",
    description:
      "A developer can pass messages (data and value) between chains and layers with simple function calls. Through message passing, a dApp developer can build powerful cross-chain applications by simply implementing a few functions within their existing smart contracts.",
    link: (
      <PrimaryLink href="/developers/cross-chain-messaging/overview" icon={<IconDocs />}>
        Start building dApps
      </PrimaryLink>
    ),
  },
  {
    title: "Managed external assets",
    description:
      "ZetaChain's network and dApps built on top of ZetaChain can manage assets and vaults of externally connected chains. This allows assets on any chain to be managed just as a smart contract on a single chain can manage assets on its respective chain. A dApp on ZetaChain can thus orchestrate and bring smart contract logic to any connected chain. This property applies to all chains, including non-smart-contract chains, like Bitcoin and Dogecoin.",
  },
];

export const KeyFeatures: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl sm:text-2xl tracking-[-0.48px] font-medium text-black dark:text-white">Key Features</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {keyFeatures.map((feature, index) => (
          <div className="flex flex-col md:flex-row gap-0 md:gap-8">
            <div className="shrink-0">
              <IconArticleRandom />
            </div>

            <div key={index} className="flex flex-col md:gap-4">
              <h4 className="min-h-[56px] flex items-center text-lg leading-[130%] font-medium">{feature.title}</h4>

              <p className="text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300">
                {feature.description}
              </p>

              {feature.link && <div className="mt-4 md:mt-2">{feature.link}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
