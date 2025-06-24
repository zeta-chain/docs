import clsx from "clsx";
import Link from "next/link";

import { BuildAnythingCard as BuildAnythingCardProps } from "../Home.constants";
import { ClockSvg } from "./svg/BuildAnythingSvgs";

export const BuildAnythingCard: React.FC<BuildAnythingCardProps> = ({
  href,
  svg,
  svgBackgroundColor,
  topTitle,
  title,
  description,
  readTime,
  readType,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "flex flex-col p-6 border border-grey-200 dark:border-grey-600 rounded-lg w-[288px] md:w-[268px]",
        "hover:shadow-light hover:border-white bg-white dark:bg-grey-900 dark:hover:bg-grey-800 dark:hover:border-grey-800 transition-all"
      )}
    >
      <div
        className="w-[240px] md:w-[220px] h-[200px] flex items-center justify-center rounded-lg mb-4"
        style={{ backgroundColor: svgBackgroundColor }}
      >
        {svg}
      </div>

      <p className="text-[16px] leading-[130%] font-medium text-[#00A87D]">{topTitle}</p>
      <h4 className="text-[20px] leading-[130%] font-medium text-grey-900 dark:text-grey-50 mb-2 h-[26px] line-clamp-1">
        {title}
      </h4>
      <p className="text-[14px] leading-[135%] font-normal text-grey-400 dark:text-grey-300 mb-6 h-[57px] line-clamp-3">
        {description}
      </p>

      <div className="flex items-center justify-between gap-2">
        <p className="flex gap-1 items-center text-[14px] leading-[135%] font-normal text-grey-900 dark:text-grey-50">
          <ClockSvg />
          {readTime}
        </p>
        <p className="text-[14px] leading-[135%] font-normal text-grey-900 dark:text-grey-50">{readType}</p>
      </div>
    </Link>
  );
};
