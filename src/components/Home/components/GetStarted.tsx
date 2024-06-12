import { useMemo } from "react";
import { useSelector } from "react-redux";

import { NavigationSection } from "~/components/shared";
import { selectDirectoriesByRoute } from "~/lib/directories/directories.selectors";

/**
 * @description
 * - Get started pages to display in the Home page.
 * - Can override the title, description, read time, and read type, otherwise it will be fetched from the page's meta data.
 */
const getStartedPages: {
  title?: string;
  description?: string;
  href: string;
  readTime?: string;
  readType?: string;
}[] = [
  {
    title: "What is ZetaChain?",
    href: "/about",
    readTime: "5 min",
    readType: "Beginner",
  },
  {
    href: "/about/token-utility/token",
  },
  {
    href: "/about/token-utility/distribution",
  },
];

export const GetStarted: React.FC = () => {
  const directoriesByRoute = useSelector(selectDirectoriesByRoute);

  const pagesWithMeta = useMemo(() => {
    const pages = getStartedPages.map((page) => {
      const directory = directoriesByRoute[page.href];

      if (!directory) return null;

      const title = page.title || directory.meta?.title;
      const description = page.description || directory.meta?.description;
      const readTime = page.readTime || directory.meta?.readTime;
      const readType = page.readType || directory.meta?.readType;

      return {
        title,
        description,
        href: page.href,
        readTime,
        readType,
      };
    });

    const filteredPages = pages.filter(Boolean) as {
      title: string;
      description: string;
      href: string;
      readTime: string;
      readType: string;
    }[];

    return filteredPages;
  }, [directoriesByRoute]);

  if (!directoriesByRoute || !pagesWithMeta.length) return null;

  return (
    <NavigationSection
      title="Get Started"
      description="Dive into the basics of ZetaChain"
      navItems={pagesWithMeta}
      lastItemEmbellishment
    />
  );
};
