import Image from "next/image";

import { globalLinks } from "~/constants";
import { basePath } from "~/lib/app.constants";

import { IconDocument, PrimaryLink, StyledHero } from "../../shared";

/**
 * @description Special variant of the Hero component for the Home page
 */
export const HomeHero: React.FC = () => {
  return (
    <StyledHero>
      <div className="order-2 lg:order-1 flex flex-col justify-center gap-8 sm:gap-10 col-span-10 lg:col-span-7 xl:lg:col-span-6">
        <h1>ZetaChain Documentation</h1>

        <div className="description flex flex-col gap-8 sm:gap-10">
          <div className="grid grid-cols-10 gap-5 md:gap-8 text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300">
            <p className="col-span-10 md:col-span-5">
              ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain
              interoperability.
            </p>

            <p className="col-span-10 md:col-span-5">
              A truly fluid, multi-chain crypto ecosystem, where users and developers can use and appreciate the
              benefits of any blockchain.
            </p>
          </div>

          <PrimaryLink href={globalLinks.whitepaperLink} target="_blank" icon={<IconDocument />}>
            Read the Whitepaper
          </PrimaryLink>
        </div>
      </div>

      <div className="order-1 lg:order-2 col-span-10 lg:col-span-3 xl:col-span-4 flex lg:justify-center">
        <Image
          src={`${basePath}/img/pages/zetachain-documentation.svg`}
          alt="ZetaChain Documentation"
          width={448}
          height={520}
          className="w-auto sm:w-full !rounded-none !mt-0 max-h-[250px] sm:max-h-[unset] sm:max-w-[250px] lg:max-w-[448px]"
          priority
        />
      </div>
    </StyledHero>
  );
};
