import { getAllPages } from "nextra/context";
import { useMemo } from "react";

import { NavigationSection } from "~/components/shared";
import { getFlatDirectories } from "~/lib/helpers/nextra";

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
    description: "Learn about the unparalleled blockchain enabling omnichain.",
    href: "/about",
    readTime: "5 min",
    readType: "Beginner",
  },
  {
    href: "/developers/cli/setup",
    readTime: "5 min",
    readType: "Beginner",
  },
  {
    href: "/developers/apps",
    readTime: "5 min",
    readType: "Beginner",
  },
  {
    href: "/developers/tutorials/hello",
  },
  {
    href: "/developers/architecture/modules/crosschain/overview",
  },
];

export const GetStarted: React.FC = () => {
  const allPages = getAllPages();

  const { directoriesByRoute } = useMemo(() => getFlatDirectories(allPages), [allPages]);

  const pagesWithMeta = useMemo(
    () =>
      getStartedPages.map((page) => {
        const title = page.title || directoriesByRoute[page.href].meta?.title;
        const description = page.description || directoriesByRoute[page.href].meta?.description;
        const readTime = page.readTime || directoriesByRoute[page.href].meta?.readTime;
        const readType = page.readType || directoriesByRoute[page.href].meta?.readType;

        return {
          title,
          description,
          href: page.href,
          readTime,
          readType,
        };
      }),
    [directoriesByRoute]
  );

  return (
    <NavigationSection
      title="Get Started"
      description="Dive into the basics of ZetaChain"
      navItems={pagesWithMeta}
      lastItemEmbellishment
    />
  );
};
