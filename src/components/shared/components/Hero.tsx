import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { useMemo } from "react";
import tw, { styled } from "twin.macro";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { basePath } from "~/lib/app.constants";

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
 * @description Hero component rendered at the top of a page that has frontMatter configuration.
 *
 * Example usage:
 * ---
 * title: "Article Title"
 * description: "Article Description"
 * hero: true
 * heroImgUrl: "/img/image-path.svg"
 * heroImgWidth: 123
 * ---
 */
export const Hero: React.FC = () => {
  const { route } = useRouter();
  const { upLg } = useCurrentBreakpoint();
  const { frontMatter } = useConfig();

  const isMainPageHero = useMemo(() => mainNavRoutes.includes(route), [route]);

  const heroProps = useMemo(() => {
    if (!frontMatter.hero) return null;

    return {
      title: frontMatter.title ? String(frontMatter.title) : undefined,
      description: frontMatter.description ? String(frontMatter.description) : undefined,
      imgUrl: frontMatter.heroImgUrl ? String(frontMatter.heroImgUrl) : undefined,
      imgWidth: frontMatter.heroImgWidth ? Number(frontMatter.heroImgWidth) : undefined,
    };
  }, [frontMatter]);

  if (!heroProps) return null;

  const { title, description, imgUrl, imgWidth } = heroProps;

  return (
    <StyledHero
      className={clsx({
        "lg:min-h-[520px]": isMainPageHero,
        "md:mb-[152px]": !isMainPageHero,
      })}
    >
      <div
        className={clsx("order-2 lg:order-1 flex flex-col justify-center gap-8 sm:gap-10", {
          "col-span-10 lg:col-span-5 xl:col-span-4": imgUrl && isMainPageHero,
          "col-span-10 lg:col-span-5": imgUrl && !isMainPageHero,
          "col-span-10": !imgUrl,
        })}
      >
        {title && <h1>{title}</h1>}
        {description && <div className="description">{description}</div>}
      </div>

      {imgUrl && (
        <div
          className={clsx("order-1 lg:order-2 col-span-10 flex lg:justify-center", {
            "lg:col-span-5 xl:col-span-6": isMainPageHero,
            "lg:col-span-5": !isMainPageHero,
          })}
        >
          <Image
            src={`${basePath}${imgUrl}`}
            alt={imgUrl}
            width={imgWidth || 570}
            height={520}
            className="w-auto lg:w-full max-h-[200px] sm:max-h-[250px] lg:max-h-[unset] !rounded-none !mt-0"
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
