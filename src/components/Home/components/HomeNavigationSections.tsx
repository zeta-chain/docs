import { getAllPages } from "nextra/context";
import React, { useMemo } from "react";

import { IconDocument, NavigationSection } from "~/components/shared";
import {
  getPageDescription,
  getPageNavigationSectionImage,
  getPageNavigationSectionVariant,
  getPageReadTime,
  getPageReadType,
  getPageTitle,
  getRecursivelyInnerMdxPages,
} from "~/lib/helpers/nextra";

import { WorkWithUs } from "./WorkWithUs";

/**
 * @description Avoid rendering navigation sections for the following routes
 */
const EXCLUDED_ROUTES = ["/about"];

/**
 * @description Used to color the title of each navigation section
 */
const BG_COLOR_CLASSES = ["bg-[#00C6EE]", "bg-[#E34ED6]", "bg-[#9AEA4A]", "bg-[#00A87D]"];

/**
 * @description Maximum number of article cards to show in each navigation block
 */
const MAX_ARTICLE_CARDS = 5;

export const HomeNavigationSections: React.FC = () => {
  const pages = getAllPages();

  const { mainFolders } = useMemo(() => {
    const mainFolders = pages.filter((page) => page.kind === "Folder" && !EXCLUDED_ROUTES.includes(page.route));

    return {
      mainFolders,
    };
  }, [pages]);

  return (
    <div className="flex flex-col gap-20 sm:gap-[120px]">
      {mainFolders.map((folder, index, folders) => {
        const variant = getPageNavigationSectionVariant(folder);
        const innerPages =
          "children" in folder
            ? getRecursivelyInnerMdxPages({ pages: folder.children, maxPages: MAX_ARTICLE_CARDS })
            : [];

        return (
          <React.Fragment key={folder.route}>
            {index === folders.length - 1 && <WorkWithUs />}

            <NavigationSection
              title={getPageTitle(folder)}
              description={getPageDescription(folder)}
              colorClass={BG_COLOR_CLASSES[index % BG_COLOR_CLASSES.length]}
              link={{ title: "Explore more", href: folder.route, icon: <IconDocument /> }}
              variant={variant}
              navImgUrl={getPageNavigationSectionImage(folder)}
              navItems={innerPages.map((page) => ({
                title: getPageTitle(page),
                description: getPageDescription(page),
                href: page.route,
                readTime: getPageReadTime(page),
                readType: getPageReadType(page),
              }))}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
