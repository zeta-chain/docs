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
  const { route, locale, defaultLocale } = useRouter();

  // Get parent route if current route is a page (not ending in /)
  // For example: /developers/overview -> /developers
  // Note: route doesn't include locale prefix, so we use it directly
  const parentRoute = route.includes('/') && !route.endsWith('/')
    ? route.substring(0, route.lastIndexOf('/'))
    : route;

  const pagesUnderRoute = getPagesUnderRoute(parentRoute);

  const { navPages, navFolders, filterPagesByLocale } = useMemo(() => {
    const currentLocale = locale || defaultLocale;

    // Helper to extract locale from page name
    const getPageLocale = (page: any): string | undefined => {
      if ("locale" in page && page.locale) return page.locale as string;
      const nameParts = page.name.split(".");
      if (nameParts.length > 1) {
        const suffix = nameParts[nameParts.length - 1];
        if (suffix === "en-US" || suffix === "zh-CN") return suffix;
      }
      return undefined;
    };

    // Helper to filter and deduplicate pages by locale
    const filterPagesByLocale = (pages: any[]) => {
      const filteredPages = pages.filter((page) => {
        // Always include folders - they are containers without locale
        if (page.kind === "Folder") {
          return true;
        }

        const pageLocale = getPageLocale(page);

        // Only include pages matching current locale
        if (pageLocale) {
          return pageLocale === currentLocale;
        } else {
          // No locale - only include on default locale
          return currentLocale === defaultLocale;
        }
      });

      // Deduplicate by route
      const routeToPage = new Map();
      filteredPages.forEach((page) => {
        if (!routeToPage.has(page.route)) {
          routeToPage.set(page.route, page);
        }
      });

      return Array.from(routeToPage.values());
    };

    const uniquePages = filterPagesByLocale(pagesUnderRoute);

    /**
     * @description Folder-less group pages, without the index (current page) that will be rendered first
     */
    const navPages = uniquePages.filter(
      (page) => page.kind === "MdxPage" && page.name !== "index" && !page.name.startsWith("index.") && page.route !== route
    );

    /**
     * @description Folder groups with children pages
     */
    const navFolders = uniquePages.filter((page) => page.kind === "Folder");

    return {
      navPages,
      navFolders,
      filterPagesByLocale,
    };
  }, [pagesUnderRoute, locale, defaultLocale, route]);

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
                  ? filterPagesByLocale(folder.children).map((page) => ({
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
