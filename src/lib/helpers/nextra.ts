import { startCase, toLower } from "lodash-es";
import { Page } from "nextra";

import { useRouter } from "next/router";
import { getMetaTitle } from "../data/meta-data";

// 方案1：使用 hook（需要在组件中调用）
export const useGetPageTitle = (page: Page) => {
  const router = useRouter();
  
  // 如果是 Folder 类型，尝试从 meta 数据映射获取
  if (page.kind === "Folder" && router.locale) {
    const metaTitle = getMetaTitle(page.route, router.locale, page.name);
    if (metaTitle) return metaTitle;
  }
  
  // 回退到原来的逻辑
  return page.meta?.title ? String(page.meta.title) : startCase(toLower(page.name));
};

// 方案2：直接传入 locale（如果需要在不使用 hook 的地方调用）
export const getPageTitleWithLocale = (page: Page, locale?: string) => {
  // 对于所有页面类型（Folder 和 MdxPage），都尝试从 meta 数据映射获取
  if (locale) {
    const metaTitle = getMetaTitle(page.route, locale, page.name);
    if (metaTitle) return metaTitle;
  }
  
  // 回退到原来的逻辑
  return page.meta?.title ? String(page.meta.title) : startCase(toLower(page.name));
};

export const getPageTitle = (page: Page) =>
  page.meta?.title ? String(page.meta.title) : startCase(toLower(page.name));

export const getPageDescription = (page: Page) => (page.meta?.description ? String(page.meta.description) : undefined);

export const getPageReadTime = (page: Page) => (page.meta?.readTime ? String(page.meta.readTime) : undefined);

export const getPageReadType = (page: Page) => (page.meta?.readType ? String(page.meta.readType) : undefined);

export type NavigationSectionVariant = "default" | "fancy";

export const getPageNavigationSectionVariant = (page: Page): NavigationSectionVariant =>
  page.meta?.variant && page.meta?.variant === "fancy" ? "fancy" : "default";

export const getPageNavigationSectionImage = (page: Page) =>
  page.meta?.navImgUrl ? String(page.meta.navImgUrl) : undefined;

export const getRecursivelyInnerMdxPages = ({ pages, maxPages }: { pages: Page[]; maxPages: number }): Page[] => {
  const mdxPages: Page[] = [];

  const getInnerMdxPages = (pagesToProcess: Page[]) => {
    for (const page of pagesToProcess) {
      if (mdxPages.length >= maxPages) break;

      if (page.kind === "Folder") {
        getInnerMdxPages(page.children);
      } else {
        if (page.name === "index") continue;

        mdxPages.push(page);
      }
    }
  };

  getInnerMdxPages(pages);

  return mdxPages;
};

export type PageMeta = {
  meta?: {
    title?: string;
    description?: string;
    readTime?: string;
    readType?: string;
    relatedTutorialUrl?: string;
    heroImgUrl?: string;
    heroImgWidth?: number;
  };
};

export type PageIndex = {
  index: number;
};

export type PageWithMeta = PageMeta & Page;

export type Directory = PageIndex & PageWithMeta & { frontMatter?: { [key: string]: any } };

export type DirectoriesByRoute = Record<string, Directory>;

export const getDirectories = (allPages: Page[]) => {
  const flatDirectories: PageWithMeta[] = [];
  const directoriesByRoute: DirectoriesByRoute = {};

  const flattenDirectories = (pages: Page[]) => {
    for (const page of pages) {
      if (page.kind === "Folder") {
        flattenDirectories(page.children);
      } else {
        flatDirectories.push(page);

        directoriesByRoute[page.route] = {
          index: flatDirectories.length - 1,
          ...page,
        };
      }
    }
  };

  flattenDirectories(allPages);

  return {
    flatDirectories,
    directoriesByRoute,
  };
};

export const countRouteSegments = (route: string) => route.split("/").filter(Boolean).length;

export const getValidParentDirectory = ({
  directoriesByRoute,
  currentRoute,
}: {
  directoriesByRoute: DirectoriesByRoute;
  currentRoute: string;
}) => {
  // Split the route into segments
  const segments = currentRoute.split("/").filter(Boolean);

  // If no segments, return null
  if (segments.length === 0) return null;

  // Start checking from the parent route
  for (let i = segments.length - 1; i >= 0; i--) {
    const parentRoute = "/" + segments.slice(0, i).join("/");

    // if a valid parent route is found, return the directory
    if (directoriesByRoute[parentRoute]) {
      return directoriesByRoute[parentRoute];
    }
  }

  // If no valid parent route is found, return null
  return null;
};
