import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, useMemo } from "react";
import { useSelector } from "react-redux";
import { usePrevious } from "react-use";

import { selectDirectoriesByRoute, selectFlatDirectories } from "~/lib/directories/directories.selectors";
import { countRouteSegments, getValidParentDirectory } from "~/lib/helpers/nextra";

import { IconArrowNarrowRight } from "../../Icons";
import { IconSpeechBubble } from "../../Icons";
import { NavigationSection } from "../../NavigationSection";
import { mainNavRoutes } from "../Layout.constants";

type PrevNextNavigationWrapperProps = PropsWithChildren<{}>;

/**
 * @description Main content wrapper to navigate to a previous doc (top page link) or the next doc (bottom nav section)
 * @todo Add optional "tutorial" link in the bottom Continue Learning section
 */
export const PrevNextNavigationWrapper: React.FC<PrevNextNavigationWrapperProps> = ({ children }) => {
  const { route } = useRouter();

  const prevRoute = usePrevious(route);

  const flatDirectories = useSelector(selectFlatDirectories);
  const directoriesByRoute = useSelector(selectDirectoriesByRoute);

  const { prevPage, nextPage, relatedTutorial } = useMemo(() => {
    const currentDirectory = directoriesByRoute[route];

    if (!route || !currentDirectory) return { prevPage: null, nextPage: null };

    const isPrevRouteCurrent = prevRoute === route;
    const isPrevRouteChildren = prevRoute ? countRouteSegments(prevRoute) > countRouteSegments(route) : false;
    const isPrevRouteValid = prevRoute && !isPrevRouteCurrent && !isPrevRouteChildren;
    const prevDirectory = isPrevRouteValid ? directoriesByRoute[prevRoute] : null;

    const nextPage = flatDirectories[currentDirectory.index + 1] || null;

    let prevPage = null;

    if (prevDirectory && prevDirectory.route !== nextPage?.route) {
      prevPage = {
        title: directoriesByRoute[prevDirectory.route].meta?.title,
        route: prevDirectory.route,
      };
    } else {
      const parentDirectory = getValidParentDirectory({ directoriesByRoute, currentRoute: currentDirectory.route });
      const parentRoute = parentDirectory?.route || "/";

      prevPage = {
        title: directoriesByRoute[parentRoute].meta?.title,
        route: directoriesByRoute[parentRoute].route,
      };
    }

    const { frontMatter, meta } = currentDirectory;

    const relatedTutorialRoute = frontMatter?.relatedTutorialUrl
      ? String(frontMatter.relatedTutorialUrl)
      : meta?.relatedTutorialUrl
      ? String(meta.relatedTutorialUrl)
      : undefined;

    const relatedTutorial = relatedTutorialRoute ? directoriesByRoute[relatedTutorialRoute] : null;

    return {
      prevPage,
      nextPage,
      relatedTutorial,
    };
  }, [flatDirectories, directoriesByRoute, route, prevRoute]);

  const isMainPage = useMemo(() => mainNavRoutes.includes(route), [route]);

  const isSubCategoryPage = useMemo(
    () => directoriesByRoute[route]?.frontMatter?.pageType === "sub-category",
    [directoriesByRoute, route]
  );

  const continueLearningNavItems = useMemo(() => {
    const navItems = [];

    if (nextPage) {
      navItems.push({
        topTitle: "Next",
        title: nextPage.meta?.title || "Next Page",
        description: nextPage.meta?.description,
        readTime: nextPage.meta?.readTime,
        readType: nextPage.meta?.readType,
        href: nextPage.route,
        withScrollToTop: true,
      });
    }

    if (relatedTutorial) {
      navItems.push({
        topTitle: "Tutorial",
        title: relatedTutorial.meta?.title || "Related Tutorial",
        description: relatedTutorial.meta?.description,
        readTime: relatedTutorial.meta?.readTime,
        readType: relatedTutorial.meta?.readType,
        href: relatedTutorial.route,
        withScrollToTop: true,
      });
    }

    return navItems;
  }, [nextPage, relatedTutorial]);

  const shouldRenderPrevLink = !isMainPage && !!prevPage;
  const shouldRenderNextSection = !isMainPage && !isSubCategoryPage && !!continueLearningNavItems.length;

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
        <>
          <div className="mb-16 mt-20 sm:mt-[120px]">
            <NavigationSection
              title="Continue Learning"
              description="Continue with the next part or try a related tutorial"
              navItems={continueLearningNavItems}
            />
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-10 py-16">
            <div className="col-span-6 flex justify-center relative">
              <hr className="bg-grey-100 dark:bg-grey-700 z-0 h-px border-none absolute top-1/2 -translate-y-1/2 w-full" />
              <div className="flex flex-col gap-4 bg-white px-4 dark:bg-grey-800 z-10 relative items-center justify-center">
                <div className="text-grey-400 dark:text-grey-300">How's your journey with ZetaChain?</div>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://zetachain.deform.cc/DevXfeedback"
                  className="flex gap-1"
                >
                  <IconSpeechBubble className="dark:text-grey-300 text-grey-400" />
                  <div className="text-[#00A5C6]">Let us know</div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
