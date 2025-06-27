import { GraphQLClient } from "graphql-request";
import { NextSeo } from "next-seo";

import {
  BuildAnything,
  BuildForNow,
  DividerSvg,
  Ecosystem,
  HomeHero,
  ShipFaster,
  ShortDividerSvg,
  VideosSection,
} from "~/components/Home";

import { CONTENTFUL_CONFIG, validateContentfulConfig } from "../../codegen";
import {
  EcosystemProject,
  GetFeaturedEcosystemAppsDocument,
  GetFeaturedEcosystemAppsQuery,
} from "../generated/contentful.graphql.types";

type HomePageProps = {
  featuredEcosystemApps: EcosystemProject[];
};

const HomePage = ({ featuredEcosystemApps }: HomePageProps) => {
  // eslint-disable-next-line no-console
  console.log("featuredEcosystemApps", featuredEcosystemApps);

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
      <Ecosystem featuredEcosystemApps={featuredEcosystemApps} />
      <DividerSvg />
    </>
  );
};

const getContentfulSsrGraphQLClient = () =>
  new GraphQLClient(CONTENTFUL_CONFIG.contentfulGraphqlUrl, {
    headers: { Authorization: `Bearer ${CONTENTFUL_CONFIG.contentfulAccessToken}` },
  });

export const getStaticProps = async () => {
  validateContentfulConfig();

  const contentfulClient = getContentfulSsrGraphQLClient();

  const { ecosystemProjectCollection } = await contentfulClient.request<GetFeaturedEcosystemAppsQuery>(
    GetFeaturedEcosystemAppsDocument
  );

  const featuredEcosystemApps = ecosystemProjectCollection?.items || [];

  return {
    props: { featuredEcosystemApps },
    revalidate: 43200, // 43200 seconds = 12 hours
  };
};

export default HomePage;
