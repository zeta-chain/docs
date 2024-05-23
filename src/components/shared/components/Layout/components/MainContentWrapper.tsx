import { PropsWithChildren } from "react";

import { PrevNextNavigationWrapper } from "./PrevNextNavigationWrapper";

type MainContentWrapperProps = PropsWithChildren<{}>;

// const EXCLUDED_HERO_ROUTES = ["/"];

/**
 * @description Wrapper for nextra main rendered content. Can be used to add custom components to all rendered pages.
 * @todo - Add custom Hero component to all pages except the home page.
 *         Need to update all mdx content to move main headings and descriptions (and some images) to the Hero component
 */
export const MainContentWrapper: React.FC<MainContentWrapperProps> = ({ children }) => {
  // const shouldRenderHero = !EXCLUDED_HERO_ROUTES.includes(route);

  return (
    <>
      {/* {shouldRenderHero && <Hero />} */}
      <PrevNextNavigationWrapper>{children}</PrevNextNavigationWrapper>
    </>
  );
};
