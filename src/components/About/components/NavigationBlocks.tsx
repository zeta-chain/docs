import { getCurrentLevelPages } from "nextra/context";
import { useMemo } from "react";

import { ArticleNavigation } from "~/components/shared";
import { getPageDescription, getPageReadTime, getPageReadType, getPageTitle } from "~/lib/helpers/nextra";

const BG_COLOR_CLASSES = ["bg-[#C241B6]", "bg-[#00C6EE]", "bg-[#9AEA4A]", "bg-[#00A87D]"];

export const NavigationBlocks: React.FC = () => {
  const pages = getCurrentLevelPages();

  const { navigationPages } = useMemo(() => {
    const navigationPages = pages.filter((page) => page.kind === "Folder");

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
