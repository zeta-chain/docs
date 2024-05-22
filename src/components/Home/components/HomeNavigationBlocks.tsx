import { getAllPages } from "nextra/context";
import React, { useMemo } from "react";

import { IconDocument, PageNavigationBlock } from "~/components/shared";
import { getPageDescription, getPageReadTime, getPageReadType, getPageTitle } from "~/lib/helpers/nextra";

import { WorkWithUs } from "./WorkWithUs";

/**
 * @description Used to exclude pages from the default tree as navigation blocks
 */
const EXCLUDED_PAGES_NAMES = ["about"];

/**
 * @description Used to color the title of the navigation blocks
 */
const BG_COLOR_CLASSES = ["bg-[#00C6EE]", "bg-[#E34ED6]", "bg-[#9AEA4A]", "bg-[#00A87D]"];

/**
 * @description Maximum number of article cards to show in each navigation block
 */
const MAX_ARTICLE_CARDS = 5;

export const HomeNavigationBlocks: React.FC = () => {
  const pages = getAllPages();

  const { mainFolders } = useMemo(() => {
    const mainFolders = pages.filter((page) => page.kind === "Folder" && !EXCLUDED_PAGES_NAMES.includes(page.name));

    return {
      mainFolders,
    };
  }, [pages]);

  return (
    <div className="flex flex-col gap-20 sm:gap-[120px]">
      {mainFolders.map((folder, index, folders) => (
        <React.Fragment key={folder.route}>
          {index === folders.length - 1 && <WorkWithUs />}

          <PageNavigationBlock
            title={getPageTitle(folder)}
            description={getPageDescription(folder)}
            colorClass={BG_COLOR_CLASSES[index % BG_COLOR_CLASSES.length]}
            link={
              "children" in folder && folder.children.length > MAX_ARTICLE_CARDS
                ? { title: "Explore more", href: folder.route, icon: <IconDocument /> }
                : undefined
            }
            articles={
              "children" in folder
                ? folder.children.slice(0, MAX_ARTICLE_CARDS).map((page) => ({
                    title: getPageTitle(page),
                    description: getPageDescription(page),
                    href: page.route,
                    readTime: getPageReadTime(page),
                    readType: getPageReadType(page),
                  }))
                : []
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
};
