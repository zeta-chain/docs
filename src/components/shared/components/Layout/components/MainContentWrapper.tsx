import { PropsWithChildren } from "react";

import { Hero } from "../../Hero";
import { PrevNextNavigationWrapper } from "./PrevNextNavigationWrapper";

type MainContentWrapperProps = PropsWithChildren<{}>;

/**
 * @description Wrapper for nextra main rendered content. Can be used to add custom components to all rendered pages.
 */
export const MainContentWrapper: React.FC<MainContentWrapperProps> = ({ children }) => {
  return (
    <>
      <PrevNextNavigationWrapper>
        <Hero />
        {children}
      </PrevNextNavigationWrapper>
    </>
  );
};
