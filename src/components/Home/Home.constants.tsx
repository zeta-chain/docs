import { DexSvg, FrontEndSvg, FungibleTokenSvg, NftSvg } from "./components/svg/BuildAnythingSvgs";
import { BuildWithTheCliSvg, BuildWithUiSvg } from "./components/svg/HomeHeroSvgs";
import { CliSvg, LocalnetSvg, ToolkitSvg, UniversalKitSvg } from "./components/svg/ShipFasterSvgs";

export type NarrowCardLink = {
  href: string;
  svg: React.ReactNode;
  title: string;
  description: string;
};

export const HERO_CARD_LINKS: NarrowCardLink[] = [
  {
    href: "/developers/tutorials/hello/",
    svg: <BuildWithTheCliSvg />,
    title: "Build with the CLI",
    description: "Scaffold your first app",
  },
  {
    href: "/developers/frontend/universalkit/",
    svg: <BuildWithUiSvg />,
    title: "Build with a UI",
    description: "Start with UniversalKit",
  },
];

export type BuildAnythingCard = {
  href: string;
  svg: React.ReactNode;
  svgBackgroundColor: string;
  topTitle: string;
  title: string;
  description: string;
  readTime: string;
  readType: string;
};

export const EXPLORER_TUTORIALS_LINK = "/developers/tutorials/intro/";

export const BUILD_ANYTHING_CARDS: BuildAnythingCard[] = [
  {
    href: "/developers/",
    svg: <DexSvg />,
    svgBackgroundColor: "#B0FF61",
    topTitle: "Universal",
    title: "DEX",
    description:
      "Learn how to build a universal dex compatible with chains such as Zetachain, Ethereum, Solana, Bitcoin and others.",
    readTime: "20 min",
    readType: "Advanced",
  },
  {
    href: "/developers/standards/nft/",
    svg: <NftSvg />,
    svgBackgroundColor: "#00A87D",
    topTitle: "Universal",
    title: "NFT",
    description:
      "Learn how to create a non-fungible token to be minted on any chain and seamlessly transferred between connected chains.",
    readTime: "20 min",
    readType: "Beginner",
  },
  {
    href: "/developers/standards/token/",
    svg: <FungibleTokenSvg />,
    svgBackgroundColor: "#006579",
    topTitle: "Universal",
    title: "Fungible Token",
    description:
      "Learn how to create a fungible token to be minted on any chain and seamlessly transferred between connected chains.",
    readTime: "20 min",
    readType: "Intermediate",
  },
  {
    href: "/developers/frontend/universalkit/",
    svg: <FrontEndSvg />,
    svgBackgroundColor: "#A03595",
    topTitle: "Universal",
    title: "Front-end",
    description:
      "Learn how to use UniversalKit, a set of ready to use React components that lets you build user interfaces for universal apps on ZetaChain.",
    readTime: "20 min",
    readType: "Beginner",
  },
];

export type VideoCard = {
  href: string;
  title: string;
  description: string;
  readTime: string;
  readType: string;
};

export const VIDEOS_CARDS: VideoCard[] = [
  {
    href: "https://www.youtube.com/embed/4zJ1fo49X8M",
    title: "Overview of example universal apps",
    description: "Taking a look at a simple Hello app, cross-chain call example, universal swap and a universal NFT.",
    readTime: "40 min",
    readType: "Intermediate",
  },
  {
    href: "https://www.youtube.com/embed/0OKmu6fGyQ0",
    title: "Dev office hours: explore our updated CLI",
    description:
      "Follow along as we walk through our newly updated CLI and demonstrate building a simple app, quickly.",
    readTime: "60 min",
    readType: "Beginner",
  },
];

export const SHIP_FASTER_CARD_LINKS: NarrowCardLink[] = [
  {
    href: "https://github.com/zeta-chain/cli",
    svg: <CliSvg />,
    title: "CLI",
    description: "Scaffolding & more",
  },
  {
    href: "/developers/frontend/universalkit/",
    svg: <UniversalKitSvg />,
    title: "UniversalKit",
    description: "Ready-to-build",
  },
  {
    href: "https://github.com/zeta-chain/toolkit",
    svg: <ToolkitSvg />,
    title: "Toolkit",
    description: "Robust tools",
  },
  {
    href: "/developers/tutorials/localnet/",
    svg: <LocalnetSvg />,
    title: "Localnet",
    description: "Instant testing",
  },
];
