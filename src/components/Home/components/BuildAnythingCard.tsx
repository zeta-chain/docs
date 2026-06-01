import clsx from "clsx";
import Link from "next/link";

import { isExternalLink } from "~/lib/helpers/url";

import { BuildAnythingCard as BuildAnythingCardProps } from "../Home.constants";
import { ClockSvg } from "./svg/ClockSvg";

export const BuildAnythingCard: React.FC<BuildAnythingCardProps> = ({
  href,
  svg,
  topTitle,
  title,
  description,
  readTime,
  readType,
}) => {
  const cardClassName = clsx(
    "flex flex-col p-6 border border-grey-200 dark:border-grey-600 rounded-lg w-[288px] md:w-[268px]",
    "hover:shadow-light hover:border-white bg-white dark:bg-grey-900 dark:hover:bg-grey-800 dark:hover:border-grey-800 transition-all"
  );

  const cardContent = (
    <>
      <div className="mb-6 -ml-[9px] [&_svg]:w-20 [&_svg]:h-20">{svg}</div>

      <p className="text-[16px] leading-[130%] font-medium text-[#00A87D]">{topTitle}</p>
      <h4 className="text-[20px] leading-[130%] font-medium text-grey-900 dark:text-grey-50 mb-2 h-[26px] line-clamp-1">
        {title}
      </h4>
      <p className="text-[14px] leading-[135%] font-normal text-grey-400 dark:text-grey-300 mb-6 h-[57px] line-clamp-3">
        {description}
      </p>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <ClockSvg />
          <span className="text-[14px] leading-[135%] font-normal text-grey-900 dark:text-grey-50">{readTime}</span>
        </div>
        <p className="text-[14px] leading-[135%] font-normal text-grey-900 dark:text-grey-50">{readType}</p>
      </div>
    </>
  );

  if (isExternalLink(href)) {
    return (
      <a href={href} className={cardClassName} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClassName}>
      {cardContent}
    </Link>
  );
};
