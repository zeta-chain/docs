import Link from "next/link";
import { useRouter } from "next/router";
import { getAllPages } from "nextra/context";
import { useConfig } from "nextra-theme-docs";
import { PropsWithChildren, useMemo } from "react";
import { usePrevious } from "react-use";

import { countRouteSegments, getFlatDirectories, getValidParentDirectory } from "~/lib/helpers/nextra";

import { IconArrowNarrowRight } from "../../Icons";
import { NavigationSection } from "../../NavigationSection";
import { mainNavRoutes } from "../Layout.constants";

type PrevNextNavigationWrapperProps = PropsWithChildren<{}>;

/**
 * @description Main content wrapper to navigate to a previous doc (top page link) or the next doc (bottom nav section)
 * @todo Add optional "tutorial" link in the bottom Continue Learning section
 */
export const PrevNextNavigationWrapper: React.FC<PrevNextNavigationWrapperProps> = ({ children }) => {
  const { route } = useRouter();
  const { frontMatter } = useConfig();
  const allPages = getAllPages();

  const prevRoute = usePrevious(route);

  const { flatDirectories, directoriesByRoute } = useMemo(() => getFlatDirectories(allPages), [allPages]);

  const { prevPage, nextPage } = useMemo(() => {
    if (!route || !directoriesByRoute[route]) return { prevPage: null, nextPage: null };

    const currentDirectory = directoriesByRoute[route];

    const isPrevRouteCurrent = prevRoute === route;
    const isPrevRouteChildren = prevRoute ? countRouteSegments(prevRoute) > countRouteSegments(route) : false;
    const isPrevRouteValid = prevRoute && !isPrevRouteCurrent && !isPrevRouteChildren;
    const prevDirectory = isPrevRouteValid ? directoriesByRoute[prevRoute] : null;

    const nextPage = flatDirectories[currentDirectory.index + 1] || null;

    let prevPage = null;

    if (prevDirectory && prevDirectory.route !== nextPage?.route) {
      prevPage = {
        title: directoriesByRoute[prevDirectory.route].title,
        route: prevDirectory.route,
      };
    } else {
      const parentDirectory = getValidParentDirectory({ directoriesByRoute, currentRoute: currentDirectory.route });
      const parentRoute = parentDirectory?.route || "/";

      prevPage = {
        title: directoriesByRoute[parentRoute].title,
        route: directoriesByRoute[parentRoute].route,
      };
    }

    return {
      prevPage,
      nextPage,
    };
  }, [flatDirectories, directoriesByRoute, route, prevRoute]);

  const isMainPage = useMemo(() => mainNavRoutes.includes(route), [route]);
  const isSubCategoryPage = frontMatter?.pageType === "sub-category";
  const shouldRenderPrevLink = !isMainPage && !!prevPage;
  const shouldRenderNextSection = !isMainPage && !isSubCategoryPage && !!nextPage;

  return (
    <>
      {shouldRenderPrevLink && (
        <div className="mb-8 sm:mb-10 md:mb-20 leading-[0]">
          <Link
            href={prevPage.route}
            className="inline-flex items-center gap-2 text-lg leading-[130%] text-grey-400 dark:text-grey-300 hover:!text-green-100 dark:hover:!text-green-100 transition-all"
          >
            <IconArrowNarrowRight className="text-current" />
            {prevPage.title || "Previous Page"}
          </Link>
        </div>
      )}

      {children}

      {shouldRenderNextSection && (
        <div className="mb-16 mt-20 sm:mt-[120px]">
          <NavigationSection
            title="Continue Learning"
            description="Continue with the next part or try a related tutorial"
            navItems={[
              {
                topTitle: "Next",
                title: nextPage.title || "Next Page",
                description: nextPage.description,
                readTime: nextPage.readTime,
                readType: nextPage.readType,
                href: nextPage.route,
                withScrollToTop: true,
              },
            ]}
          />
        </div>
      )}
    </>
  );
};
