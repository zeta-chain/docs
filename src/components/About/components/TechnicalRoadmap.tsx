import { SectionTitle } from "../../shared";

export const TechnicalRoadmap: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <SectionTitle title="Technical Roadmap" description="Key development milestones" colorClass="bg-[#E34ED6]" />

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-10 gap-5 md:gap-8 text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300">
          <div className="col-span-10 md:col-span-5">
            <p className="mb-5">
              ZetaChain’s mission is to serve as a platform for universal access, simplicity, and utility across any
              blockchains. ZetaChain’s initial mainnet launch contains all core functionality contemplated within
              ZetaChain’s proposed features, including its EVM layer, omnichain smart contracts, and cross-chain
              messaging.
            </p>

            <p>
              ZetaChain is a Proof-of-Stake blockchain designed for interoperability, supporting the creation of
              omnichain dApps that can span any chain, including the Bitcoin blockchain, where all transaction,
              incentives, data security, and cross-chain interaction requires ZETA tokens to function.
            </p>
          </div>

          <p className="col-span-10 md:col-span-5">
            This document outlines the initial development directions that the protocol may take in order to improve and
            add onto the core functionality of the ZetaChain network, based on decentralized community input. All real
            development and upgrades will be done through governance, and development of the ZetaChain network is fully
            open-source — anybody can and should feel free to contribute to the development of the network. The
            community and contributors will drive the progress of the network.
          </p>
        </div>
      </div>
    </div>
  );
};
