import { globalLinks } from "~/constants";

import { IconDocument, PrimaryLink, SectionTitle } from "../../shared";

export const WhatIsZetaChain: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <SectionTitle title="What is ZetaChain?" description="An overview" />

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-10 gap-5 md:gap-8 text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300">
          <p className="col-span-10 md:col-span-5">
            ZetaChain is the foundational, public blockchain that enables omnichain smart contracts and messaging
            between any blockchain. It solves the problems of “cross-chain” and “multi-chain” and aims to open the
            crypto and global financial ecosystem to anyone.
          </p>

          <p className="col-span-10 md:col-span-5">
            ZetaChain envisions and supports a truly fluid, multi-chain crypto ecosystem, where users and developers can
            move between and appreciate the benefits of any blockchain: payments, DeFi, liquidity, games, art, social
            graphs, performance, security, privacy, and more.
          </p>
        </div>

        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-10 lg:col-span-5 flex items-center gap-4 p-4 sm:p-6 rounded-lg border border-grey-200 dark:border-grey-600">
            <div className="shrink-0">
              <IconDocument className="text-grey-400 dark:text-grey-300 w-8 h-8" />
            </div>

            <div>
              <p className="text-sm mb-0.5 text-grey-400 dark:text-grey-300">
                Get a closer look at ZetaChain's background and architecture
              </p>

              <PrimaryLink href={globalLinks.whitepaperLink} target="_blank" className="text-sm">
                Read the Whitepaper
              </PrimaryLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
