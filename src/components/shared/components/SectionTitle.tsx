import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";

import { basePath } from "~/lib/app.constants";

import { PrimaryLink } from "./Link";

export type SectionTitleLink = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export type SectionTitleProps = {
  title: string;
  description?: string;
  colorClass?: string;
  link?: SectionTitleLink;
  variant?: "default" | "fancy";
  navImgUrl?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  colorClass,
  link,
  variant = "default",
  navImgUrl,
}) => {
  const titleComponent = useMemo(
    () => <h2 className="text-2xl sm:text-4xl tracking-[-0.64px] font-medium text-black dark:text-white">{title}</h2>,
    [title]
  );

  const linkComponent = useMemo(
    () =>
      link && (
        <PrimaryLink href={link.href} icon={link.icon}>
          {link.title}
        </PrimaryLink>
      ),
    [link]
  );

  if (variant === "fancy") {
    return (
      <div className="h-full flex flex-col justify-between gap-6">
        <div className="flex items-center flex-grow relative">
          {navImgUrl && (
            <Image src={`${basePath}${navImgUrl}`} alt={title} layout="fill" objectFit="contain" className="!m-0" />
          )}
        </div>

        {titleComponent}

        {description && <p className="text-base text-grey-400 dark:text-grey-300 line-clamp-2">{description}</p>}

        {linkComponent}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <div
        className={clsx(
          "h-[3px] rounded-full w-8 relative -left-[1px] -top-[1px] mb-1 sm:mb-0",
          {
            "bg-green-200": !colorClass,
          },
          colorClass
        )}
      />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end flex-wrap gap-4">
        <div className="flex flex-col gap-1 sm:gap-2">
          {titleComponent}

          {description && <p className="text-base text-grey-400 dark:text-grey-300">{description}</p>}
        </div>

        {linkComponent}
      </div>
    </div>
  );
};
