import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import { Hero } from "../../Hero";

type MainContentProps = PropsWithChildren<{}>;

const EXCLUDED_HERO_ROUTES = ["/"];

/**
 * @description Wrapper for nextra main rendered content.
 *              Can be used to add custom components to all rendered pages.
 */
export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { route } = useRouter();
  const shouldRenderHero = !EXCLUDED_HERO_ROUTES.includes(route);

  return (
    <>
      {shouldRenderHero && <Hero />}
      {children}
    </>
  );
};
