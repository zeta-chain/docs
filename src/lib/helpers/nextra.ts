import { startCase, toLower } from "lodash-es";
import { Page } from "nextra";

const getMetaFrontMatter = (page: Page) => {
  const meta = page.meta as Record<string, any> | undefined;
  if (!meta) return undefined;

  const frontMatter = meta.frontMatter as Record<string, any> | undefined;
  return { meta, frontMatter };
};

export const getPageTitle = (page: Page) =>
  page.meta?.title ? String(page.meta.title) : startCase(toLower(page.name));

export const getPageDescription = (page: Page) => {
  const refs = getMetaFrontMatter(page);
  if (!refs) return undefined;

  const { meta, frontMatter } = refs;
  if (meta.description) return String(meta.description);
  if (frontMatter?.description) return String(frontMatter.description);
  return undefined;
};

export const getPageReadTime = (page: Page) => {
  const refs = getMetaFrontMatter(page);
  if (!refs) return undefined;

  const { meta, frontMatter } = refs;
  if (meta.readTime) return String(meta.readTime);
  if (frontMatter?.readTime) return String(frontMatter.readTime);
  return undefined;
};

export const getPageReadType = (page: Page) => {
  const refs = getMetaFrontMatter(page);
  if (!refs) return undefined;

  const { meta, frontMatter } = refs;
  if (meta.readType) return String(meta.readType);
  if (frontMatter?.readType) return String(frontMatter.readType);
  return undefined;
};

export type NavigationSectionVariant = "default" | "fancy";

export const getPageNavigationSectionVariant = (page: Page): NavigationSectionVariant => {
  const refs = getMetaFrontMatter(page);
  if (!refs) return "default";

  const { meta, frontMatter } = refs;
  const variant = meta.variant ?? frontMatter?.variant;
  return variant === "fancy" ? "fancy" : "default";
};

export const getPageNavigationSectionImage = (page: Page) => {
  const refs = getMetaFrontMatter(page);
  if (!refs) return undefined;

  const { meta, frontMatter } = refs;
  const navImgUrl = meta.navImgUrl ?? frontMatter?.navImgUrl;
  return navImgUrl ? String(navImgUrl) : undefined;
};

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
