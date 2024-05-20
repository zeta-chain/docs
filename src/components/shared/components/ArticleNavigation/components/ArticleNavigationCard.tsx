import clsx from "clsx";
import Link from "next/link";

import { IconArticleRandom, IconTime } from "../../Icons";

export type ArticleNavigationCardProps = {
  title: string;
  description: string;
  href: string;
  readTime: string;
  readType: string;
  className?: string;
};

export const ArticleNavigationCard: React.FC<ArticleNavigationCardProps> = ({
  title,
  description,
  href,
  readTime,
  readType,
  className,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        `flex flex-col gap-6 sm:h-[304px] p-3 sm:p-6 justify-between rounded-lg border border-grey-200 dark:border-grey-600
         hover:shadow-light hover:border-white dark:hover:bg-grey-800 dark:hover:border-grey-800 transition-all`,
        className
      )}
    >
      <div className="flex-grow">
        <IconArticleRandom />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-medium text-black dark:text-white">{title}</h3>
          <p className="text-sm text-grey-400 dark:text-grey-300 line-clamp-3">{description}</p>
        </div>

        <div className="flex justify-between flex-wrap">
          <p className="flex gap-1 items-center">
            <IconTime /> <span className="text-black dark:text-white">{readTime}</span>
          </p>
          <p className="text-black dark:text-white">{readType}</p>
        </div>
      </div>
    </Link>
  );
};
