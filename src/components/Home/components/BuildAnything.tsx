import Link from "next/link";

import { BUILD_ANYTHING_CARDS } from "../Home.constants";
import { BuildAnythingCard } from "./BuildAnythingCard";
import { DocsSvg, ShortDividerSvg } from "./svg/BuildAnythingSvgs";

export const BuildAnything = () => {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <div className="flex flex-col px-5 md:px-[72px]">
          <h2 className="text-[32px] md:text-[36px] leading-[110%] tracking-[-0.64px] md:tracking-[-0.72px] font-medium text-grey-900 dark:text-grey-50 mb-2 text-center">
            Build anything you can imagine
          </h2>

          <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center mb-4">
            Get started with step-by-step tutorials to get your idea off the ground
          </p>

          <div className="flex flex-col items-center gap-[30px]">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[16px] leading-[130%] font-normal text-[#00A5C6] dark:text-[#B0FF61] text-center"
            >
              <DocsSvg />
              Explore tutorials →
            </Link>

            <div className="w-8 h-[3px] rounded-full bg-[#00A87D] mx-auto" />
          </div>
        </div>

        <div className="flex gap-4 md:gap-8 overflow-x-scroll no-scrollbar pb-10 pt-14 md:py-14 px-5 md:px-[72px] max-w-[1312px] mx-auto">
          {BUILD_ANYTHING_CARDS.map((card) => (
            <BuildAnythingCard key={card.href} {...card} />
          ))}
        </div>
      </div>

      <ShortDividerSvg />
    </>
  );
};
