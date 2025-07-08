import { ChainSvgLinkWrapper } from "./ChainSvgLinkWrapper";
import {
  ArbitrumSvg,
  AvalancheSvg,
  BaseSvg,
  EthereumSvg,
  FadeRightSvg,
  PolygonSvg,
  SolanaSvg,
  SuiSvg,
} from "./svg/BuildForNowSvgs";
import { BitcoinSvg } from "./svg/BuildForNowSvgs";
import { FadeLeftSvg } from "./svg/BuildForNowSvgs";

export const BuildForNow = () => {
  return (
    <div className="py-16 md:py-20 max-w-[1312px] mx-auto">
      <div className="flex flex-col px-5 md:px-[72px]">
        <div className="order-2 md:order-1">
          <h2 className="text-[32px] md:text-[36px] leading-[110%] tracking-[-0.64px] md:tracking-[-0.72px] font-medium text-grey-900 dark:text-grey-50 mb-2 text-center">
            Built for now, <br className="block md:hidden" /> and the future
          </h2>

          <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center mb-8">
            Build once and automatically work with newly supported chains
          </p>

          <div className="flex flex-col items-center">
            <div className="w-8 h-[3px] rounded-full bg-[#00C6EE] mx-auto" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-10 order-3 md:order-2">
          <div className="basis-full md:basis-1/2 flex justify-center md:justify-end">
            <p className="text-[16px] leading-[160%] font-normal text-grey-900 dark:text-grey-50 md:max-w-[448px]">
              ZetaChain was built from the ground up to support all blockchains, natively. From chains without native
              smart contract capabilities to modern, composable chains, universal apps can handle them all.
            </p>
          </div>

          <div className="basis-full md:basis-1/2 flex justify-center md:justify-start">
            <p className="text-[16px] leading-[160%] font-normal text-grey-900 dark:text-grey-50 md:max-w-[448px]">
              Apps built on ZetaChain are prepared for future chains by default. As new chain support is added to
              ZetaChain, Universal Apps automatically gain access and support from day one integration.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-3 md:mt-[78px] w-full flex justify-center gap-2 md:gap-4 lg:gap-6 relative max-w-[350px] md:max-w-[928px] mx-auto px-[15px] md:px-10 mb-10 md:mb-0 overflow-x-hidden">
          <FadeLeftSvg />
          <ChainSvgLinkWrapper chainPage="evm">
            <AvalancheSvg />
          </ChainSvgLinkWrapper>
          <ChainSvgLinkWrapper chainPage="evm">
            <BaseSvg />
          </ChainSvgLinkWrapper>
          <ChainSvgLinkWrapper chainPage="solana">
            <SolanaSvg />
          </ChainSvgLinkWrapper>
          <ChainSvgLinkWrapper chainPage="bitcoin">
            <BitcoinSvg />
          </ChainSvgLinkWrapper>
          <ChainSvgLinkWrapper chainPage="evm">
            <EthereumSvg />
          </ChainSvgLinkWrapper>
          <ChainSvgLinkWrapper chainPage="sui">
            <SuiSvg />
          </ChainSvgLinkWrapper>
          <ChainSvgLinkWrapper chainPage="evm">
            <PolygonSvg />
          </ChainSvgLinkWrapper>
          <ChainSvgLinkWrapper chainPage="evm">
            <ArbitrumSvg />
          </ChainSvgLinkWrapper>
          <FadeRightSvg />
        </div>
      </div>
    </div>
  );
};
