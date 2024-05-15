import clsx from "clsx";
import Image from "next/image";
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
  title: string;
  description: React.ReactNode;
  imageUrl?: string;
  variant?: "primary" | "secondary";
};

export const Hero: React.FC<HeroProps> = ({ title, description, imageUrl, variant = "primary" }) => {
  return (
    <StyledHero className={clsx("grid grid-cols-10 gap-8")}>
      <div
        className={clsx("order-2 lg:order-1 flex flex-col justify-center gap-8 sm:gap-10", {
          "col-span-10 lg:col-span-4": variant === "primary" && imageUrl,
          "col-span-10 lg:col-span-6": variant === "secondary" && imageUrl,
          "col-span-10": !imageUrl,
        })}
      >
        <h1>{title}</h1>

        <div className="description">{description}</div>
      </div>

      {imageUrl && (
        <div className="order-1 lg:order-2 col-span-10 lg:col-span-4 flex lg:justify-center">
          <Image
            src={`${basePath}${imageUrl}`}
            alt={title}
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
