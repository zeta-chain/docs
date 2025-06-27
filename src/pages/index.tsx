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

type HomePageProps = {
  content: string;
};

const HomePage = ({ content }: HomePageProps) => {
  // eslint-disable-next-line no-console
  console.log("content", content);

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
      <Ecosystem />
      <DividerSvg />
    </>
  );
};

export const getStaticProps = async () => {
  const content = "TEST";

  return { props: { content } };
};

export default HomePage;
