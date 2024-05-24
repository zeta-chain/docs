import clsx from "clsx";
import Image from "next/image";
import { useConfig } from "nextra-theme-docs";
import { useMemo } from "react";
import tw, { styled } from "twin.macro";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { basePath } from "~/lib/app.constants";

export const StyledHero = styled.div`
  ${tw`grid grid-cols-10 gap-8 lg:min-h-[520px] mb-20 sm:mb-[120px]`}

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
 * hero:
 *   title: "Article Title"
 *   description: "Article Description"
 *   imgUrl: "img/image-path.svg"
 *   imgWidth: 123
 * ---
 */
export const Hero: React.FC = () => {
  const { upLg } = useCurrentBreakpoint();
  const { frontMatter } = useConfig();

  const heroProps = useMemo(() => {
    if (!frontMatter.hero) return null;

    const { hero } = frontMatter;

    return {
      title: hero.title ? String(hero.title) : undefined,
      description: hero.description ? String(hero.description) : undefined,
      imgUrl: hero.imgUrl ? String(hero.imgUrl) : undefined,
      imgWidth: hero.imgWidth ? Number(hero.imgWidth) : undefined,
    };
  }, [frontMatter]);

  if (!heroProps) return null;

  const { title, description, imgUrl, imgWidth } = heroProps;

  return (
    <StyledHero>
      <div
        className={clsx("order-2 lg:order-1 flex flex-col justify-center gap-8 sm:gap-10", {
          "col-span-10 lg:col-span-5 xl:col-span-4": imgUrl,
          "col-span-10": !imgUrl,
        })}
      >
        {title && <h1>{title}</h1>}
        {description && <div className="description">{description}</div>}
      </div>

      {imgUrl && (
        <div className="order-1 lg:order-2 col-span-10 lg:col-span-5 xl:col-span-6 flex lg:justify-center">
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
