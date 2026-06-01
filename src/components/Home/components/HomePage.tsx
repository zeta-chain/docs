import { NextSeo } from "next-seo";

import { BuildAnything } from "./BuildAnything";
import { BuildForNow } from "./BuildForNow";
import { HomeHero } from "./HomeHero";
import { ShipFaster } from "./ShipFaster";
import { DividerSvg } from "./svg/DividerSvgs";

export const HomePage: React.FC = () => {
  return (
    <>
      <NextSeo
        title={"ZetaChain Documentation"}
        description={"ZetaChain is a decentralized blockchain and smart contract platform built for interoperability."}
      />

      <HomeHero />

      <BuildAnything />

      <DividerSvg />
      <BuildForNow />

      <DividerSvg />
      <ShipFaster />
    </>
  );
};
