import Link from "next/link";
import { useRouter } from "next/router";
import { getAllPages } from "nextra/context";
import { PropsWithChildren, useMemo } from "react";

import { getFlatDirectories } from "~/lib/helpers/nextra";

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
  const allPages = getAllPages();

  const { flatDirectories, directoriesByRoute } = useMemo(() => getFlatDirectories(allPages), [allPages]);

  const { prevPage, nextPage } = useMemo(() => {
    if (!route || !directoriesByRoute[route]) return { prevPage: null, nextPage: null };

    const currentDirectory = directoriesByRoute[route];

    return {
      prevPage: flatDirectories[currentDirectory.index - 1] || null,
      nextPage: flatDirectories[currentDirectory.index + 1] || null,
    };
  }, [flatDirectories, directoriesByRoute, route]);

  const shouldRenderNavComponents = !mainNavRoutes.includes(route);

  return (
    <>
      {shouldRenderNavComponents && !!prevPage && (
        <div className="mb-8 sm:mb-10 md:mb-20 leading-[0]">
          <Link
            href={prevPage.route}
            className="inline-flex items-center gap-2 text-lg leading-[130%] text-grey-400 dark:text-grey-300 hover:!text-grey-300 dark:hover:!text-grey-400"
          >
            <IconArrowNarrowRight className="text-current" />
            {prevPage.title || "Previous Page"}
          </Link>
        </div>
      )}

      {children}

      {shouldRenderNavComponents && !!nextPage && (
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
              },
            ]}
          />
        </div>
      )}
    </>
  );
};
