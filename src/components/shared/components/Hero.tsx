import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import tw, { styled } from "twin.macro";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { basePath } from "~/lib/app.constants";
import { selectDirectoriesByRoute } from "~/lib/directories/directories.selectors";
import nextraDocsThemeConfig from "~/theme.config";

import { IconGitHub, IconTime } from "./Icons";
import { mainNavRoutes } from "./Layout";

export const StyledHero = styled.div`
  ${tw`grid grid-cols-10 gap-8 mb-20 sm:mb-[120px]`}

  h1 {
    ${tw`text-4xl sm:text-5xl md:text-[80px] md:leading-none md:-tracking-[2.4px] font-medium text-grey-900 dark:text-grey-50`}
  }

  .description {
    ${tw`text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300`}
  }
`;

/**
 * @description Hero component rendered at the top of a page. Configured with _meta.json, or overwritten with frontMatter.
 *
 * Example usage:
 * ---
 * title: "Article Title"
 * description: "Article Description"
 * readTime: "5 min"
 * readType: "Beginner"
 * heroImgUrl: "/img/image-path.svg"
 * heroImgWidth: 123
 * ---
 */
export const Hero: React.FC = () => {
  const { route } = useRouter();
  const { upLg } = useCurrentBreakpoint();

  const directoriesByRoute = useSelector(selectDirectoriesByRoute);
  const currentDirectory = useMemo(() => directoriesByRoute[route], [directoriesByRoute, route]);

  const isMainPage = useMemo(() => mainNavRoutes.includes(route), [route]);
  const isHomePage = useMemo(() => ["/"].includes(route), [route]);
  const isSubCategoryPage = useMemo(
    () => currentDirectory?.frontMatter?.pageType === "sub-category",
    [currentDirectory]
  );

  const { title, description, readTime, readType, imgUrl, imgWidth } = useMemo(() => {
    if (!currentDirectory) return {};

    const { frontMatter, meta } = currentDirectory;

    const title = frontMatter?.title ? String(frontMatter.title) : meta?.title ? String(meta.title) : undefined;

    const description = frontMatter?.description
      ? String(frontMatter.description)
      : meta?.description
      ? String(meta.description)
      : undefined;

    const readTime = frontMatter?.readTime
      ? String(frontMatter.readTime)
      : meta?.readTime
      ? String(meta.readTime)
      : undefined;

    const readType = frontMatter?.readType
      ? String(frontMatter.readType)
      : meta?.readType
      ? String(meta.readType)
      : undefined;

    const imgUrl = frontMatter?.heroImgUrl
      ? String(frontMatter.heroImgUrl)
      : meta?.heroImgUrl
      ? String(meta.heroImgUrl)
      : undefined;

    const imgWidth = frontMatter?.heroImgWidth
      ? Number(frontMatter.heroImgWidth)
      : meta?.heroImgWidth
      ? Number(meta.heroImgWidth)
      : undefined;

    return {
      title,
      description,
      readTime,
      readType,
      imgUrl,
      imgWidth,
    };
  }, [currentDirectory]);

  if (isHomePage || !title) return null;

  return (
    <StyledHero
      className={clsx({
        "lg:min-h-[520px]": isMainPage,
        "md:mb-[152px]": !isMainPage,
      })}
    >
      <div
        className={clsx("order-2 lg:order-1 flex flex-col justify-center gap-8 sm:gap-10", {
          "col-span-10 lg:col-span-5 xl:col-span-4": isMainPage || isSubCategoryPage,
          "col-span-10 lg:col-span-6": !isMainPage && !isSubCategoryPage,
        })}
      >
        <h1>{title}</h1>
        {title && (
          <div className="mt-4 mb-2">
            <a
              href={(() => {
                const routePath = route;
                let githubFilePath = routePath
                  .replace(/^\//, "")
                  .replace(/\[\[...(.+)\]\]/, "$1")
                  .replace(/\[([^\]]+)\]/g, "$1")
                  // Removed redundant replacement operation
                  .replace(/\/$/, "");
                if (githubFilePath === "") githubFilePath = "index";
                githubFilePath = `src/pages/${githubFilePath}.mdx`;
                return `${nextraDocsThemeConfig.docsRepositoryBase}/edit/main/${githubFilePath}`;
              })()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
              style={{ textDecoration: "none" }}
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full border border-[#00bc8d] bg-transparent group-hover:bg-[#00bc8d]/10 transition-colors">
                <IconGitHub className="w-5 h-5 text-[#00bc8d]" />
              </span>
              <span className="text-lg font-medium" style={{ color: "#00bc8d" }}>
                Edit this doc in GitHub
              </span>
            </a>
          </div>
        )}

        {description && <div className="description">{description}</div>}

        {(readTime || readType) && (
          <div className="flex gap-2">
            {readTime && (
              <p className="flex gap-1 items-center">
                <IconTime className="text-grey-300 dark:text-grey-400" />
                <span className="text-black dark:text-grey-300">{readTime}</span>
              </p>
            )}

            {readTime && readType && (
              <div className="relative top-[3px] w-[1px] h-[calc(100%-6px)] bg-grey-200 dark:bg-grey-600" />
            )}

            {readType && <p className="text-black dark:text-grey-300">{readType}</p>}
          </div>
        )}
      </div>

      {imgUrl && (
        <div
          className={clsx("order-1 lg:order-2 flex lg:justify-center", {
            "col-span-10 lg:col-span-5 xl:col-span-6": isMainPage || isSubCategoryPage,
            "col-span-10 lg:col-span-4": !isMainPage && !isSubCategoryPage,
          })}
        >
          <Image
            src={`${basePath}${imgUrl}`}
            alt={imgUrl}
            width={imgWidth || 570}
            height={520}
            className="w-auto lg:w-full max-h-[100px] sm:max-h-[150px] lg:max-h-[unset] !rounded-none !mt-0"
            priority
            style={{
              ...(upLg && { maxWidth: `${imgWidth || 570}px` }),
            }}
          />
        </div>
      )}
    </StyledHero>
  );
};
