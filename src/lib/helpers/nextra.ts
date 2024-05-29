import { startCase, toLower } from "lodash-es";
import { Page } from "nextra";

export const getPageTitle = (page: Page) =>
  page.meta?.title ? String(page.meta.title) : startCase(toLower(page.name));

export const getPageDescription = (page: Page) => (page.meta?.description ? String(page.meta.description) : undefined);

export const getPageReadTime = (page: Page) => (page.meta?.readTime ? String(page.meta.readTime) : undefined);

export const getPageReadType = (page: Page) => (page.meta?.readType ? String(page.meta.readType) : undefined);

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

type PageMeta = {
  title?: string;
  description?: string;
  readTime?: string;
  readType?: string;
};

type PageIndex = {
  index: number;
};

type PageWithMeta = PageMeta & Page;

export const getFlatDirectories = (allPages: Page[]) => {
  const flatDirectories: PageWithMeta[] = [];
  const directoriesByRoute: Record<string, PageIndex & PageWithMeta> = {};

  const flattenDirectories = (pages: Page[]) => {
    for (const page of pages) {
      if (page.kind === "Folder") {
        flattenDirectories(page.children);
      } else {
        const directory = {
          ...(typeof page.meta?.title === "string" ? { title: page.meta?.title } : {}),
          ...(typeof page.meta?.description === "string" ? { description: page.meta?.description } : {}),
          ...(typeof page.meta?.readTime === "string" ? { readTime: page.meta?.readTime } : {}),
          ...(typeof page.meta?.readType === "string" ? { readType: page.meta?.readType } : {}),
          ...page,
        };

        flatDirectories.push(directory);

        directoriesByRoute[page.route] = {
          index: flatDirectories.length - 1,
          ...directory,
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
