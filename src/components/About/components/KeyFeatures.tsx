import { IconArticleRandom, IconDocs, PrimaryLink } from "../../shared";

type KeyFeature = {
  title: string;
  description: string;
  link?: React.ReactNode;
};

const keyFeatures: KeyFeature[] = [
  {
    title: "Chain Abstraction Framework",
    description:
      "ZetaChain is a decentralized and public blockchain network. It is built on Cosmos SDK and Comet BFT consensus. The unique feature of ZetaChain is the Chain Abstraction Framework (CAF), which enables omnichain connectivity of the network to any blockchain. This framework is accessible through the Universal EVM, which is a synchronous environment that can be called from any chain, manage native assets on any chain, and access asynchronous arbitrary messaging to call contracts on other chains. Developing with the CAF offers the ability to build robust state management combined with multi-leg, multi-chain apps' needs, all in the familiar EVM development environment. The resulting user experience is unbounded, where the majority of apps can be used entirely from any single network while the rest of the app logic can be affordably, securely, and performantly abstracted.",
  },
  {
    title: "Hyper-connected nodes",
    description:
      "ZetaChain's nodes have observers that monitor transactions on every connected chain. Through ZetaChain's TSS architecture, the network can sign and verify transactions on every connected chain. By being able to read and write to connected chains in a secure, decentralized manner, these hyper-connected nodes provide a seamless Chain Abstraction Framework for developers to build novel and powerful cross-chain applications.",
  },
  {
    title: "Omnichain smart contracts",
    description:
      "Smart contracts deployed natively on ZetaChain can read/write to connected chains. ZetaChain is the only public blockchain to support smart contracts with this capability, enabling a new paradigm of app development.",
  },
  {
    title: "Cross-chain message passing",
    description:
      "A developer can pass messages (data and value) between chains and layers with simple function calls. Through message passing, a dApp developer can build powerful cross-chain applications by simply implementing a few functions within their existing smart contracts. By composing messaging capabilities with Omnichain Smart Contracts, apps can abstract multi-leg cross-chain transactions in tandem with native asset movements and interactions. For example, a contract on ZetaChain could be called by a user on Bitcoin and also enact external contract calls on Ethereum and BNB Chain, and more legs thereafter — all in just one step for the user.",
    link: (
      <PrimaryLink href="/developers/tutorials/hello" icon={<IconDocs />}>
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
    <div className="flex flex-col gap-8 sm:gap-10">
      <h3 className="text-xl sm:text-2xl tracking-[-0.48px] font-medium text-black dark:text-white">Key Features</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {keyFeatures.map((feature, index) => (
          <div key={feature.title} className="flex flex-col md:flex-row gap-0 md:gap-8">
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
