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
              ZetaChain is the first Universal Blockchain with native access to Bitcoin, Ethereum, Solana, and more,
              offering seamless UX and unified liquidity to the next billions of users.
            </p>

            <p className="col-span-10 md:col-span-5">
              With its Universal EVM, ZetaChain empowers developers to build Universal Apps that operate natively across
              any blockchain, creating a fluid crypto ecosystem from a single platform.
            </p>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 col-span-10 lg:col-span-3 xl:col-span-4 flex lg:justify-center">
        <Image
          src={`${basePath}/img/pages/zetachain-documentation.svg`}
          alt="ZetaChain Documentation"
          width={448}
          height={520}
          className="w-auto lg:w-full !rounded-none !mt-0 max-h-[150px] sm:max-h-[200px] lg:max-h-[unset] lg:max-w-[448px]"
          priority
        />
      </div>
    </StyledHero>
  );
};
