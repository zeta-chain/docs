import { NextSeo } from "next-seo";

import { useHomePageContent } from "../hooks/useHomePageContent";
import { BuildAnything } from "./BuildAnything";
import { BuildForNow } from "./BuildForNow";
import { Ecosystem } from "./Ecosystem";
import { HomeHero } from "./HomeHero";
import { ShipFaster } from "./ShipFaster";
import { DividerSvg } from "./svg/DividerSvgs";

export const HomePage: React.FC = () => {
  const { featuredEcosystemApps, isLoadingFeaturedEcosystemApps } = useHomePageContent();

  return (
    <>
      <NextSeo
        title={"ZetaChain Documentation"}
        description={
          "ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain interoperability."
        }
      />

      <HomeHero />

      <BuildAnything />

      <DividerSvg />
      <BuildForNow />

      <DividerSvg />
      <ShipFaster />

      {(isLoadingFeaturedEcosystemApps || featuredEcosystemApps.length > 0) && (
        <>
          <DividerSvg />
          <Ecosystem
            featuredEcosystemApps={featuredEcosystemApps}
            isLoadingFeaturedEcosystemApps={isLoadingFeaturedEcosystemApps}
          />
        </>
      )}
    </>
  );
};
