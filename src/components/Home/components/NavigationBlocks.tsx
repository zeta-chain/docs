import { getAllPages } from "nextra/context";
import { useMemo } from "react";

import { ArticleNavigation } from "~/components/shared";
import { getPageDescription, getPageReadTime, getPageReadType, getPageTitle } from "~/lib/helpers/nextra";

/**
 * @description Used to exclude pages from the default tree as navigation blocks
 */
const EXCLUDED_PAGES = ["about"];

/**
 * @description Used to color the title of the navigation blocks
 */
const BG_COLOR_CLASSES = ["bg-[#00C6EE]", "bg-[#E34ED6]", "bg-[#9AEA4A]", "bg-[#00A87D]"];

export const NavigationBlocks: React.FC = () => {
  const pages = getAllPages();

  const { navigationPages } = useMemo(() => {
    const navigationPages = pages.filter((page) => page.kind === "Folder" && !EXCLUDED_PAGES.includes(page.name));

    return {
      navigationPages,
    };
  }, [pages]);

  return (
    <>
      {navigationPages.map((page, index) => (
        <ArticleNavigation
          key={page.route}
          title={getPageTitle(page)}
          description={getPageDescription(page)}
          colorClass={BG_COLOR_CLASSES[index % BG_COLOR_CLASSES.length]}
          articles={
            "children" in page
              ? page.children.map((page) => ({
                  title: getPageTitle(page),
                  description: getPageDescription(page),
                  href: page.route,
                  readTime: getPageReadTime(page),
                  readType: getPageReadType(page),
                }))
              : []
          }
        />
      ))}
    </>
  );
};
