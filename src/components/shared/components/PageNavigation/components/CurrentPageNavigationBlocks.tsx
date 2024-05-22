import { useRouter } from "next/router";
import { getPagesUnderRoute } from "nextra/context";
import { useMemo } from "react";

import { getPageDescription, getPageReadTime, getPageReadType, getPageTitle } from "~/lib/helpers/nextra";

import { PageNavigationBlock } from "./PageNavigationBlock";

const BG_COLOR_CLASSES = ["bg-[#00C6EE]", "bg-[#E34ED6]", "bg-[#9AEA4A]", "bg-[#00A87D]", "bg-[#C241B6]"];

type CurrentPageNavigationBlocksProps = {
  mainTitle?: string; // Display the title for the first folder-less group pages
  mainDescription?: string; // Display the description for the first folder-less group pages
};

export const CurrentPageNavigationBlocks: React.FC<CurrentPageNavigationBlocksProps> = ({
  mainTitle,
  mainDescription,
}) => {
  const { route } = useRouter();
  const pages = getPagesUnderRoute(route);

  const { navigationPages, navigationFolders } = useMemo(() => {
    const navigationPages = pages.filter((page) => page.kind === "MdxPage" && page.name !== "index"); // Folder-less group pages, without the index (current page)
    const navigationFolders = pages.filter((page) => page.kind === "Folder"); // Folder groups with children pages

    return {
      navigationPages,
      navigationFolders,
    };
  }, [pages]);

  return (
    <div className="flex flex-col gap-20 sm:gap-[120px]">
      <PageNavigationBlock
        title={mainTitle}
        description={mainDescription}
        articles={navigationPages.map((page) => ({
          title: getPageTitle(page),
          description: getPageDescription(page),
          href: page.route,
          readTime: getPageReadTime(page),
          readType: getPageReadType(page),
        }))}
      />

      {navigationFolders.map((folder, index) => (
        <PageNavigationBlock
          key={folder.route}
          title={getPageTitle(folder)}
          description={getPageDescription(folder)}
          colorClass={BG_COLOR_CLASSES[index % BG_COLOR_CLASSES.length]}
          articles={
            "children" in folder
              ? folder.children.map((page) => ({
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
    </div>
  );
};
