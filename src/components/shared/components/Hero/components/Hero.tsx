import clsx from "clsx";
import Image from "next/image";
import { useConfig } from "nextra-theme-docs";
import tw, { styled } from "twin.macro";

import { basePath } from "~/lib/app.constants";

const StyledHero = styled.div`
  ${tw`grid grid-cols-10 gap-8 lg:min-h-[520px] mb-[120px]`}

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
  imageUrl?: string;
  variant?: "primary" | "secondary";
};

export const Hero: React.FC<HeroProps> = ({ title, description, imageUrl, variant = "primary" }) => {
  const { title: pageTitle, frontMatter } = useConfig();

  const heroTitle = title || (frontMatter.title ? String(frontMatter.title) : undefined) || pageTitle;
  const heroDescription = description || (frontMatter.description ? String(frontMatter.description) : undefined);
  const heroImageUrl = imageUrl || (frontMatter.imageUrl ? String(frontMatter.imageUrl) : undefined);

  return (
    <StyledHero>
      <div
        className={clsx("order-2 lg:order-1 flex flex-col justify-center gap-8 sm:gap-10", {
          "col-span-10 lg:col-span-4": variant === "primary" && heroImageUrl,
          "col-span-10 lg:col-span-6": variant === "secondary" && heroImageUrl,
          "col-span-10": !heroImageUrl,
        })}
      >
        <h1>{heroTitle}</h1>

        {heroDescription && <div className="description">{heroDescription}</div>}
      </div>

      {heroImageUrl && (
        <div
          className={clsx("order-1 lg:order-2 col-span-10 flex lg:justify-center", {
            "lg:col-span-6": variant === "primary",
            "lg:col-span-4": variant === "secondary",
          })}
        >
          <Image
            src={`${basePath}${heroImageUrl}`}
            alt={heroTitle}
            width={448}
            height={520}
            className="w-auto h-[200px] sm:h-[260px] lg:h-[520px] !rounded-none !mt-0"
            priority
          />
        </div>
      )}
    </StyledHero>
  );
};
