import clsx from "clsx";

import { HeroCardLink as HeroCardLinkProps } from "../Home.constants";

export const HeroCardLink: React.FC<HeroCardLinkProps> = ({ href, svg, title, description }) => {
  return (
    <a
      href={href}
      className={clsx(
        "w-full md:max-w-[296px] flex flex-row gap-4 items-center border border-grey-200 dark:border-grey-600 rounded-lg p-6",
        "hover:shadow-light hover:border-white bg-white dark:bg-grey-900 dark:hover:bg-grey-800 dark:hover:border-grey-800 transition-all"
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-md">{svg}</div>

      <div className="flex flex-col">
        <h3 className="text-[18px] md:text-[20px] leading-[130%] font-medium text-grey-900 dark:text-grey-50">
          {title}
        </h3>

        <p className="text-[16px] leading-[130%] font-normal text-grey-400 dark:text-grey-300">{description}</p>
      </div>
    </a>
  );
};
