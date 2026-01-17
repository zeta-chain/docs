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
            The only layer your app <br className="block md:hidden" /> will ever need
          </h2>

          <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center mb-8">
            Build once. Run everywhere.
          </p>

          <div className="flex flex-col items-center">
            <div className="w-8 h-[3px] rounded-full bg-[#00C6EE] mx-auto" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-10 order-3 md:order-2">
          <div className="basis-full md:basis-1/3 flex justify-center">
            <div className="md:max-w-[320px]">
              <h3 className="text-[18px] font-medium text-grey-900 dark:text-grey-50 mb-2">Build once. Run everywhere.</h3>
              <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300">
                Apps run across chains and models without rebuilding integrations for each ecosystem or provider.
              </p>
            </div>
          </div>

          <div className="basis-full md:basis-1/3 flex justify-center">
            <div className="md:max-w-[320px]">
              <h3 className="text-[18px] font-medium text-grey-900 dark:text-grey-50 mb-2">Private memory by default</h3>
              <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300">
                Remember context across sessions, keep it private by design, and enforce access via user-controlled
                permissions.
              </p>
            </div>
          </div>

          <div className="basis-full md:basis-1/3 flex justify-center">
            <div className="md:max-w-[320px]">
              <h3 className="text-[18px] font-medium text-grey-900 dark:text-grey-50 mb-2">Monetize without infrastructure</h3>
              <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300">
                Monetize usage, access, context, or execution globally without standing up servers, billing systems, or
                account flows.
              </p>
            </div>
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
