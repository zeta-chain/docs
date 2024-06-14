import { PropsWithChildren } from "react";

import { useSetDirectoriesState } from "~/hooks/useSetDirectoriesState";

import { Hero } from "../../Hero";
import { TableOfContentsWrapper } from "../../TOC";
import { PrevNextNavigationWrapper } from "./PrevNextNavigationWrapper";

type MainContentWrapperProps = PropsWithChildren<{}>;

/**
 * @description Wrapper for nextra main rendered content. Can be used to add custom components to all rendered pages.
 */
export const MainContentWrapper: React.FC<MainContentWrapperProps> = ({ children }) => {
  useSetDirectoriesState();

  return (
    <>
      <PrevNextNavigationWrapper>
        <Hero />
        <TableOfContentsWrapper>{children}</TableOfContentsWrapper>
      </PrevNextNavigationWrapper>
    </>
  );
};
