import { DocsSvg } from "./svg/DocsSvg";

export const Ecosystem = () => {
  return (
    <div className="pt-16 md:pt-20">
      <div className="flex flex-col px-5 md:px-[72px]">
        <h2 className="text-[32px] md:text-[36px] leading-[110%] tracking-[-0.64px] md:tracking-[-0.72px] font-medium text-grey-900 dark:text-grey-50 mb-2 text-center">
          Great products are <br className="block md:hidden" /> built on ZetaChain
        </h2>

        <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center mb-4">
          Projects, products and service providers love building on ZetaChain
        </p>

        <div className="flex flex-col items-center gap-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hub.zetachain.com/ecosystem/category/all/items/12/page/1"
            className="inline-flex items-center gap-1 text-[16px] leading-[130%] font-normal text-[#00A5C6] dark:text-[#B0FF61] text-center"
          >
            <DocsSvg />
            Explore the ecosystem →
          </a>

          <div className="w-8 h-[3px] rounded-full bg-[#FF5AF1] mx-auto" />
        </div>
      </div>
    </div>
  );
};
