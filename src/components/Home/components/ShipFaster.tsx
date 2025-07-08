import { SHIP_FASTER_CARD_LINKS } from "../Home.constants";
import { NarrowCardLink } from "./NarrowCardLink";

export const ShipFaster = () => {
  return (
    <div className="py-16 md:py-20 max-w-[1312px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 px-5 md:px-[72px]">
        <div className="basis-full lg:basis-[448px]">
          <p className="text-[16px] leading-[130%] font-normal text-[#00A5C6] text-center lg:text-left mb-2">
            Crafted for Builders
          </p>

          <h2 className="text-[32px] md:text-[36px] leading-[110%] tracking-[-0.64px] md:tracking-[-0.72px] font-medium text-grey-900 dark:text-grey-50 mb-6 text-center lg:text-left">
            Ship faster with a <br /> powerful set of tools
          </h2>

          <div className="flex flex-col items-center lg:items-start mb-10">
            <div className="w-8 h-[3px] rounded-full bg-[#00A87D] mx-auto lg:mx-0" />
          </div>

          <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center lg:text-left max-w-[448px] mx-auto lg:mx-0">
            Build anything you can imagine with a set of robust tools that empower you to build great products and ship
            faster.
          </p>
        </div>

        <div className="basis-full lg:basis-auto lg:flex-grow md:items-center md:flex md:justify-center lg:min-w-[536px]">
          <div className="flex flex-col flex-wrap md:inline-grid md:grid-cols-2 gap-6 md:justify-center md:items-center">
            {SHIP_FASTER_CARD_LINKS.map((link) => (
              <NarrowCardLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
