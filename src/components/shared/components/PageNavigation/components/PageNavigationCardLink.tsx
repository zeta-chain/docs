import clsx from "clsx";
import Link, { LinkProps as NextLinkProps } from "next/link";

import { IconArticleRandom, IconTime } from "../../Icons";

export type PageNavigationCardLinkProps = {
  title: string;
  topTitle?: string;
  description?: string;
  icon?: React.ReactNode;
  readTime?: string;
  readType?: string;
  className?: string;
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const PageNavigationCardLink: React.FC<PageNavigationCardLinkProps> = ({
  title,
  topTitle,
  description,
  icon,
  readTime,
  readType,
  className,
  ...linkProps
}) => {
  return (
    <Link
      {...linkProps}
      className={clsx(
        `flex flex-col gap-6 sm:h-[304px] p-3 sm:p-6 justify-between rounded-lg border border-grey-200 dark:border-grey-600
         hover:shadow-light hover:border-white dark:hover:bg-grey-800 dark:hover:border-grey-800 transition-all`,
        className
      )}
    >
      <div className="flex-grow">{icon || <IconArticleRandom />}</div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {topTitle && (
            <p className="text-[10px] leading-none font-medium uppercase text-[#00A5C6] dark:text-[#00A5C6]">
              {topTitle}
            </p>
          )}
          <h3 className="text-xl font-medium text-black dark:text-white">{title}</h3>
          {description && <p className="text-sm text-grey-400 dark:text-grey-300 line-clamp-3">{description}</p>}
        </div>

        {(readTime || readType) && (
          <div className="flex justify-between flex-wrap">
            {readTime && (
              <p className="flex gap-1 items-center">
                <IconTime /> <span className="text-black dark:text-white">{readTime}</span>
              </p>
            )}
            {readType && <p className="text-black dark:text-white">{readType}</p>}
          </div>
        )}
      </div>
    </Link>
  );
};
