import { useRouter } from "next/router";
import { getPagesUnderRoute } from "nextra/context";
import React, { useMemo } from "react";

import { getPageDescription, getPageReadTime, getPageReadType, getPageTitle } from "~/lib/helpers/nextra";

import { NavigationSection } from "./NavigationSection";

const BG_COLOR_CLASSES = ["bg-[#00C6EE]", "bg-[#9AEA4A]", "bg-[#E34ED6]", "bg-[#00A87D]", "bg-[#C241B6]"];

type CurrentPageNavigationSectionsProps = {
  /**
   * @description Display the title for the first folder-less group pages
   */
  mainTitle?: string;
  /**
   * @description Display the description for the first folder-less group pages
   */
  mainDescription?: string;
  /**
   * @description Extra section in between the navigation sections
   */
  injectedSection?: {
    /**
     * @description Position where the injected section should be placed. If not provided, the section will be appended before the end
     */
    index?: number;
    component: React.ReactNode;
  };
};

/**
 * @description This component dynamically generates navigation sections with card links for inner mdx pages of a current route
 */
export const CurrentPageNavigationSections: React.FC<CurrentPageNavigationSectionsProps> = ({
  mainTitle,
  mainDescription,
  injectedSection,
}) => {
  const { route } = useRouter();
  const pagesUnderRoute = getPagesUnderRoute(route);

  const { navPages, navFolders } = useMemo(() => {
    /**
     * @description Folder-less group pages, without the index (current page) that will be rendered first
     */
    const navPages = pagesUnderRoute.filter((page) => page.kind === "MdxPage" && page.name !== "index");

    /**
     * @description Folder groups with children pages
     */
    const navFolders = pagesUnderRoute.filter((page) => page.kind === "Folder");

    return {
      navPages,
      navFolders,
    };
  }, [pagesUnderRoute]);

  return (
    <div className="flex flex-col gap-20 sm:gap-[120px]">
      {!!navPages.length && (
        <NavigationSection
          title={mainTitle}
          description={mainDescription}
          navItems={navPages.map((page) => ({
            title: getPageTitle(page),
            description: getPageDescription(page),
            href: page.route,
            readTime: getPageReadTime(page),
            readType: getPageReadType(page),
          }))}
        />
      )}

      {navFolders.map((folder, index, folders) => {
        const shouldInjectSection =
          !!injectedSection && (injectedSection.index ? injectedSection.index === index : index === folders.length - 1);

        return (
          <React.Fragment key={folder.route}>
            {shouldInjectSection && injectedSection.component}

            <NavigationSection
              key={folder.route}
              title={getPageTitle(folder)}
              description={getPageDescription(folder)}
              colorClass={BG_COLOR_CLASSES[index % BG_COLOR_CLASSES.length]}
              navItems={
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
          </React.Fragment>
        );
      })}
    </div>
  );
};
