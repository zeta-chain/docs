import { NextSeo } from "next-seo";

import { useHomePageContent } from "../hooks/useHomePageContent";
import { BuildAnything } from "./BuildAnything";
import { BuildForNow } from "./BuildForNow";
import { Ecosystem } from "./Ecosystem";
import { HomeHero } from "./HomeHero";
import { JoinCommunity } from "./JoinCommunity";
import { ShipFaster } from "./ShipFaster";
import { DividerSvg, ShortDividerSvg } from "./svg/DividerSvgs";
import { VideosSection } from "./VideosSection";

type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = () => {
  const { featuredEcosystemApps, isLoadingFeaturedEcosystemApps, ecosystemEvents, isLoadingEcosystemEvents } =
    useHomePageContent();

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
      <ShortDividerSvg />
      <VideosSection />
      <DividerSvg />
      <BuildForNow />
      <DividerSvg />
      <ShipFaster />
      <DividerSvg />
      <Ecosystem
        featuredEcosystemApps={featuredEcosystemApps}
        isLoadingFeaturedEcosystemApps={isLoadingFeaturedEcosystemApps}
      />
      <DividerSvg />
      <JoinCommunity ecosystemEvents={ecosystemEvents} isLoadingEcosystemEvents={isLoadingEcosystemEvents} />
    </>
  );
};
