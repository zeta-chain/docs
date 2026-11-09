import { NextSeo } from "next-seo";

import { HomeHero } from "./HomeHero";
import { ShipFaster } from "./ShipFaster";

export const HomePage: React.FC = () => {
  return (
    <>
      <NextSeo
        title={"ZetaChain Documentation"}
        description={
          "Guides and reference for the ZetaChain network and the ZETA token: wallets, staking, explorers, network details and running a node."
        }
      />

      <HomeHero />

      <ShipFaster />
    </>
  );
};
