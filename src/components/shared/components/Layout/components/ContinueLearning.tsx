import { useRouter } from "next/router";
import { getAllPages } from "nextra/context";
import { useMemo } from "react";

import { getFlatDirectories } from "~/lib/helpers/nextra";

import { NavigationSection } from "../../NavigationSection";
import { mainNavRoutes } from "../Layout.constants";

const EXCLUDED_ROUTES = ["/", ...mainNavRoutes];

/**
 * @description End of Page Navigation to a previous and next page
 */
export const ContinueLearning: React.FC = () => {
  const { route } = useRouter();
  const allPages = getAllPages();

  const { flatDirectories, directoriesByRoute } = useMemo(() => getFlatDirectories(allPages), [allPages]);

  const navigationPages = useMemo(() => {
    if (!route || !directoriesByRoute[route]) return [];

    const currentDirectory = directoriesByRoute[route];

    const prevPage = flatDirectories[currentDirectory.index - 1];
    const nextPage = flatDirectories[currentDirectory.index + 1];

    const navigationPages = [];

    if (prevPage) {
      navigationPages.push({
        topTitle: "Previous",
        title: prevPage.title || "Previous Page",
        description: prevPage.description,
        href: prevPage?.route,
      });
    }

    if (nextPage) {
      navigationPages.push({
        topTitle: "Next",
        title: nextPage.title || "Next Page",
        description: nextPage.description,
        href: nextPage?.route,
      });
    }

    return navigationPages;
  }, [flatDirectories, directoriesByRoute, route]);

  const shouldRenderContinueLearning = !EXCLUDED_ROUTES.includes(route);

  if (!shouldRenderContinueLearning || !navigationPages.length) return null;

  return (
    <div className="mb-[88px] mt-[152px]">
      <NavigationSection
        title="Continue Learning"
        description="Continue with the next part or go back to the previous one"
        navItems={navigationPages}
      />
    </div>
  );
};
