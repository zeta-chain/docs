import { DeterministicIconArticle } from "../shared";
import { BuildWithTheCliSvg } from "./components/svg/HomeHeroSvgs";
import { LocalnetSvg, ToolkitSvg, ZetaChainSvg } from "./components/svg/ShipFasterSvgs";

export type NarrowCardLink = {
  href: string;
  svg: React.ReactNode;
  title: string;
  description: string;
};

export const HERO_CARD_LINKS: NarrowCardLink[] = [
  {
    href: "https://docs.anuma.ai/",
    svg: <BuildWithTheCliSvg />,
    title: "Build on Anuma",
    description: "Create your first AI app",
  },
];

export type BuildAnythingCard = {
  href: string;
  svg: React.ReactNode;
  topTitle: string;
  title: string;
  description: string;
  readTime: string;
  readType: string;
};

export const EXPLORER_TUTORIALS_LINK = "https://docs.anuma.ai/tutorials/quickstart";

export const BUILD_ANYTHING_CARDS: BuildAnythingCard[] = [
  {
    href: "https://docs.anuma.ai/tutorials/quickstart",
    svg: <DeterministicIconArticle index={0} />,
    topTitle: "Anuma",
    title: "Quickstart",
    description: "Get up and running with the Anuma SDK — multi-model AI chat with persistent memory in minutes.",
    readTime: "10 min",
    readType: "Beginner",
  },
  {
    href: "https://docs.anuma.ai/tutorials/nextjs",
    svg: <DeterministicIconArticle index={1} />,
    topTitle: "Next.js",
    title: "AI Chat App",
    description: "Build a web AI chat app with persistent memory and seamless switching across every model.",
    readTime: "20 min",
    readType: "Beginner",
  },
  {
    href: "https://docs.anuma.ai/tutorials/agent",
    svg: <DeterministicIconArticle index={2} />,
    topTitle: "Anuma",
    title: "Agent",
    description: "Build an AI agent with tools, streaming, and persistent memory across every model.",
    readTime: "20 min",
    readType: "Intermediate",
  },
  {
    href: "https://docs.anuma.ai/tutorials/expo",
    svg: <DeterministicIconArticle index={3} />,
    topTitle: "Expo",
    title: "Mobile App",
    description: "Ship an AI chat app on iOS and Android with Expo and the Anuma SDK.",
    readTime: "20 min",
    readType: "Intermediate",
  },
];

export const SHIP_FASTER_CARD_LINKS: NarrowCardLink[] = [
  {
    href: "/nodes/overview/",
    svg: <LocalnetSvg />,
    title: "Run a Node",
    description: "Set up a validator or full node",
  },
  {
    href: "/reference/api/",
    svg: <ToolkitSvg />,
    title: "RPC/API Endpoints",
    description: "Connect to ZetaChain nodes",
  },
  {
    href: "/about/overview/",
    svg: <ZetaChainSvg />,
    title: "About ZetaChain",
    description: "The protocol behind Anuma",
  },
];
