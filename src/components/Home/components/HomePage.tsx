import { NextSeo } from "next-seo";
import useSWR from "swr";

import {
  EcosystemProject,
  GetFeaturedEcosystemAppsDocument,
  GetFeaturedEcosystemAppsQuery,
} from "../../../generated/contentful.graphql.types";
import { contentfulFetcher, contentfulFetcherOptions } from "../Home.utils";
import { BuildAnything } from "./BuildAnything";
import { BuildForNow } from "./BuildForNow";
import { Ecosystem } from "./Ecosystem";
import { HomeHero } from "./HomeHero";
import { ShipFaster } from "./ShipFaster";
import { DividerSvg, ShortDividerSvg } from "./svg/DividerSvgs";
import { VideosSection } from "./VideosSection";

type HomePageProps = {
  featuredEcosystemApps?: EcosystemProject[];
};

export const HomePage: React.FC<HomePageProps> = () => {
  // Fetch data using SWR
  const {
    data: featuredEcosystemAppsData,
    error: featuredEcosystemAppsError,
    isLoading: isLoadingFeaturedEcosystemApps,
  } = useSWR<GetFeaturedEcosystemAppsQuery, Error>(
    GetFeaturedEcosystemAppsDocument,
    contentfulFetcher,
    contentfulFetcherOptions
  );

  const featuredEcosystemApps = featuredEcosystemAppsError
    ? []
    : ((featuredEcosystemAppsData?.ecosystemProjectCollection?.items || []) as unknown as EcosystemProject[]);

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

      {featuredEcosystemApps.length > 0 && !isLoadingFeaturedEcosystemApps && (
        <>
          <Ecosystem
            featuredEcosystemApps={featuredEcosystemApps}
            isLoadingFeaturedEcosystemApps={isLoadingFeaturedEcosystemApps}
          />
          <DividerSvg />
        </>
      )}
    </>
  );
};
