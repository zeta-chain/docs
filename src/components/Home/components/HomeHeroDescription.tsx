import { globalLinks } from "~/constants";

import { IconDocument } from "../../shared/components/Icons";
import { PrimaryLink } from "../../shared/components/Link";

export const HomeHeroDescription: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="grid grid-cols-10 gap-5 md:gap-8 text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300">
        <p className="col-span-10 md:col-span-5">
          ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain
          interoperability.
        </p>

        <p className="col-span-10 md:col-span-5">
          A truly fluid, multi-chain crypto ecosystem, where users and developers can use and appreciate the benefits of
          any blockchain.
        </p>
      </div>

      <PrimaryLink href={globalLinks.whitepaperLink} target="_blank" icon={<IconDocument />}>
        Read the Whitepaper
      </PrimaryLink>
    </div>
  );
};
