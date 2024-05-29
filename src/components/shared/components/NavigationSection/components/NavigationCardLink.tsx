import clsx from "clsx";
import Link, { LinkProps as NextLinkProps } from "next/link";

import { IconArticleRandom, IconTime } from "../../Icons";

export type NavigationCardLinkProps = {
  title: string;
  topTitle?: string;
  description?: string;
  icon?: React.ReactNode;
  readTime?: string;
  readType?: string;
  className?: string;
  isMainPage?: boolean;
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavigationCardLink: React.FC<NavigationCardLinkProps> = ({
  title,
  topTitle,
  description,
  icon,
  readTime,
  readType,
  className,
  isMainPage,
  ...linkProps
}) => {
  return (
    <Link
      {...linkProps}
      className={clsx(
        `flex flex-col gap-6 sm:h-[304px] p-3 sm:p-6 justify-between rounded-lg border border-grey-200 
         hover:shadow-light hover:border-white dark:bg-grey-900 transition-all`,
        {
          "dark:border-grey-600 dark:hover:bg-grey-800 dark:hover:border-grey-800": isMainPage,
          "dark:border-grey-900 dark:hover:bg-grey-600 dark:hover:border-grey-600": !isMainPage,
        },
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
