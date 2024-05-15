import { globalLinks } from "~/constants";

import { IconDocument } from "../../Icons";
import { PrimaryLink } from "../../Link";

export const HomeHeroDescription: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <p>
          ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain
          interoperability.
        </p>

        <p>
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
