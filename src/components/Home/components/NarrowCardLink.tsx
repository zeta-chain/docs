import clsx from "clsx";
import Link from "next/link";

import { isExternalLink } from "~/lib/helpers/url";

import { NarrowCardLink as NarrowCardLinkProps } from "../Home.constants";
import { NarrowCardLinkContent } from "./NarrowCardLinkContent";

export const NarrowCardLink: React.FC<NarrowCardLinkProps> = ({ href, svg, title, description }) => {
  const linkClassName = clsx(
    "w-full md:max-w-[296px] flex flex-row gap-4 items-center border border-grey-200 dark:border-grey-600 rounded-lg p-6",
    "hover:shadow-light hover:border-white bg-white dark:bg-grey-900 dark:hover:bg-grey-800 dark:hover:border-grey-800 transition-all"
  );

  if (isExternalLink(href)) {
    return (
      <a href={href} className={linkClassName} target="_blank" rel="nofollow noreferrer">
        <NarrowCardLinkContent svg={svg} title={title} description={description} />
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName}>
      <NarrowCardLinkContent svg={svg} title={title} description={description} />
    </Link>
  );
};
