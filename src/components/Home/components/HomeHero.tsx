import { HERO_CARD_LINKS } from "../Home.constants";
import { HeroCardLink } from "./HeroCardLink";

export const HomeHero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center mt-6 md:mt-0">
      <h1 className="text-[48px] md:text-[72px] leading-[110%] md:leading-[100%] font-medium tracking-[-0.96px] md:tracking-[-1.44px] text-grey-900 dark:text-grey-50 text-center mb-6">
        Build a <span className="text-[#00A87D] dark:text-[#B0FF61] block md:inline">universal app</span>{" "}
        <br className="hidden md:block" /> in minutes
      </h1>

      <p className="text-[16px] leading-[160%] font-normal text-grey-400 dark:text-grey-300 text-center max-w-[688px] mx-auto mb-14 md:mb-[72px]">
        Start building an app that works natively across blockchains – even{" "}
        <span className="text-[#FA5628] font-semibold">Bitcoin</span> – with native tokens on the only decentralized,
        smart contract platform built for universal interoperability.
      </p>

      <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-6 border-b border-grey-200 dark:border-grey-600 pb-16 md:pb-20">
        {HERO_CARD_LINKS.map((link) => (
          <HeroCardLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
};
