import clsx from "clsx";

import { PrimaryLink } from "../../Link";

export type ArticleNavigationTitleProps = {
  title: string;
  description?: string;
  colorClass?: string;
  link?: {
    title: string;
    href: string;
    icon: React.ReactNode;
  };
};

export const ArticleNavigationTitle: React.FC<ArticleNavigationTitleProps> = ({
  title,
  description,
  colorClass,
  link,
}) => {
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
          <h2 className="text-2xl sm:text-4xl tracking-[-0.64px] font-medium text-black dark:text-white">{title}</h2>
          {description && <p className="text-base text-grey-400 dark:text-grey-300">{description}</p>}
        </div>

        {link && (
          <PrimaryLink href={link.href} icon={link.icon}>
            {link.title}
          </PrimaryLink>
        )}
      </div>
    </div>
  );
};
