import clsx from "clsx";
import Image from "next/image";
import { useConfig } from "nextra-theme-docs";
import tw, { styled } from "twin.macro";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { basePath } from "~/lib/app.constants";

const StyledHero = styled.div`
  ${tw`grid grid-cols-10 gap-8 mb-20 sm:mb-[120px]`}

  h1 {
    ${tw`text-4xl sm:text-5xl md:text-[80px] md:leading-none md:-tracking-[2.4px] font-medium text-grey-900 dark:text-grey-50`}
  }

  .description {
    ${tw`text-base leading-[160%] font-normal text-grey-400 dark:text-grey-300`}
  }
`;

type HeroProps = {
  title?: string;
  description?: React.ReactNode;
  imgUrl?: string;
  imgMaxWidth?: number;
  variant?: "primary" | "secondary";
};

export const Hero: React.FC<HeroProps> = ({ title, description, imgUrl, imgMaxWidth, variant = "primary" }) => {
  const { upLg } = useCurrentBreakpoint();
  const { title: pageTitle, frontMatter } = useConfig();

  const heroTitle = title || (frontMatter.title ? String(frontMatter.title) : undefined) || pageTitle;
  const heroDescription = description || (frontMatter.description ? String(frontMatter.description) : undefined);
  const heroImgUrl = imgUrl || (frontMatter.imgUrl ? String(frontMatter.imgUrl) : undefined);
  const heroImgMaxWidth = imgMaxWidth || (frontMatter.imgMaxWidth ? Number(frontMatter.imgMaxWidth) : undefined);

  return (
    <StyledHero>
      <div
        className={clsx("order-2 lg:order-1 flex flex-col justify-center gap-8 sm:gap-10", {
          "col-span-10 lg:col-span-5 xl:col-span-4": variant === "primary" && heroImgUrl,
          "col-span-10 lg:col-span-7 xl:lg:col-span-6": variant === "secondary" && heroImgUrl,
          "col-span-10": !heroImgUrl,
        })}
      >
        <h1>{heroTitle}</h1>

        {heroDescription && <div className="description">{heroDescription}</div>}
      </div>

      {heroImgUrl && (
        <div
          className={clsx("order-1 lg:order-2 col-span-10 flex lg:justify-center", {
            "lg:col-span-5 xl:col-span-6": variant === "primary",
            "lg:col-span-3 xl:col-span-4": variant === "secondary",
          })}
        >
          <Image
            src={`${basePath}${heroImgUrl}`}
            alt={heroTitle}
            width={448}
            height={520}
            className="w-auto sm:w-full !rounded-none !mt-0 max-h-[250px] sm:max-h-[unset] sm:max-w-[250px]"
            priority
            style={{
              ...(heroImgMaxWidth && upLg && { maxWidth: `${frontMatter.imgMaxWidth}px` }),
            }}
          />
        </div>
      )}
    </StyledHero>
  );
};
