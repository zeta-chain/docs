import { globalLinks } from "~/constants";

import { ArticleNavigationTitle, IconDocument, PrimaryLink } from "../../shared";

export const WhatIsZetaChain: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <ArticleNavigationTitle title="What is ZetaChain?" description="An overview" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300">
          <p>
            ZetaChain is the foundational, public blockchain that enables omnichain, generic smart contracts and
            messaging between any blockchain. It solves the problems of “cross-chain” and “multi-chain” and aims to open
            the crypto and global financial ecosystem to anyone.
          </p>

          <p>
            ZetaChain envisions and supports a truly fluid, multi-chain crypto ecosystem, where users and developers can
            move between and appreciate the benefits of any blockchain: payments, DeFi, liquidity, games, art, social
            graphs, performance, security, privacy, and so on.
          </p>
        </div>

        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-10 lg:col-span-5 flex items-center gap-4 p-4 sm:p-6 rounded-lg border border-grey-200 dark:border-grey-600">
            <div className="shrink-0">
              <IconDocument className="text-grey-500 dark:text-grey-300 w-8 h-8" />
            </div>

            <div>
              <p className="text-sm text-grey-400 dark:text-grey-300">
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
