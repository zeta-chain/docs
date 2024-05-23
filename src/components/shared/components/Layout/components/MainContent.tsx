import { PropsWithChildren } from "react";

import { ContinueLearning } from "./ContinueLearning";

type MainContentProps = PropsWithChildren<{}>;

// const EXCLUDED_HERO_ROUTES = ["/"];

/**
 * @description Wrapper for nextra main rendered content. Can be used to add custom components to all rendered pages.
 * @todo - Add custom Hero component to all pages except the home page.
 *         Need to update all mdx content to move main headings and descriptions (and some images) to the Hero component
 */
export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  // const shouldRenderHero = !EXCLUDED_HERO_ROUTES.includes(route);

  return (
    <>
      {/* {shouldRenderHero && <Hero />} */}
      {children}
      <ContinueLearning />
    </>
  );
};
