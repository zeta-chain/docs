import { NextSeo } from "next-seo";

import { useHomePageContent } from "../hooks/useHomePageContent";
import { BuildAnything } from "./BuildAnything";
import { BuildForNow } from "./BuildForNow";
import { Ecosystem } from "./Ecosystem";
import { EngineeringBlog } from "./EngineeringBlog";
import { HomeHero } from "./HomeHero";
import { JoinCommunity } from "./JoinCommunity";
import { ShipFaster } from "./ShipFaster";
import { DividerSvg, ShortDividerSvg } from "./svg/DividerSvgs";
import { VideosSection } from "./VideosSection";

export const HomePage: React.FC = () => {
  const {
    featuredEcosystemApps,
    isLoadingFeaturedEcosystemApps,

    ecosystemEvents,
    isLoadingEcosystemEvents,

    engineeringBlogPosts,
    isLoadingEngineeringBlogPosts,
  } = useHomePageContent();

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

      {(isLoadingFeaturedEcosystemApps || featuredEcosystemApps.length > 0) && (
        <>
          <DividerSvg />
          <Ecosystem
            featuredEcosystemApps={featuredEcosystemApps}
            isLoadingFeaturedEcosystemApps={isLoadingFeaturedEcosystemApps}
          />
        </>
      )}

      <DividerSvg />
      <JoinCommunity ecosystemEvents={ecosystemEvents} isLoadingEcosystemEvents={isLoadingEcosystemEvents} />

      {(isLoadingEngineeringBlogPosts || engineeringBlogPosts.length > 0) && (
        <>
          <ShortDividerSvg />
          <EngineeringBlog
            engineeringBlogPosts={engineeringBlogPosts}
            isLoadingEngineeringBlogPosts={isLoadingEngineeringBlogPosts}
          />
        </>
      )}
    </>
  );
};
