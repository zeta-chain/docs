import { LocalnetSvg, ToolkitSvg, UniversalKitSvg, ZetaChainSvg } from "./components/svg/ShipFasterSvgs";

export type NarrowCardLink = {
  href: string;
  svg: React.ReactNode;
  title: string;
  description: string;
};

export const HERO_CARD_LINKS: NarrowCardLink[] = [
  {
    href: "/users/overview/",
    svg: <UniversalKitSvg />,
    title: "Use ZetaHub",
    description: "Wallets, staking and sending ZETA",
  },
  {
    href: "/about/token-utility/token/",
    svg: <ZetaChainSvg />,
    title: "ZETA Token",
    description: "Supply, utility and distribution",
  },
  {
    href: "/reference/explorers/",
    svg: <ToolkitSvg />,
    title: "Explorers",
    description: "Look up transactions and accounts",
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
    description: "How the network works",
  },
];
