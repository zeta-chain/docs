import { BuildWithTheCliSvg, BuildWithUiSvg } from "./components/svg/HomeHeroSvgs";

export type HeroCardLink = {
  href: string;
  svg: React.ReactNode;
  title: string;
  description: string;
};

export const HERO_CARD_LINKS = [
  {
    href: "/",
    svg: <BuildWithTheCliSvg />,
    title: "Build with the CLI",
    description: "Scaffold your first app",
  },
  {
    href: "/",
    svg: <BuildWithUiSvg />,
    title: "Build with a UI",
    description: "Start with UniversalKit",
  },
];
