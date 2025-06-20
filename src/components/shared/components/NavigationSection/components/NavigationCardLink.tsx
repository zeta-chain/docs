import clsx from "clsx";
import Link, { LinkProps as NextLinkProps } from "next/link";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { useCurrentBreakpoint } from "~/hooks/useCurrentBreakpoint";
import { useMixpanel } from "~/hooks/useMixpanel";
import { useAppDispatch } from "~/lib/app.store";
import { selectDirectoriesByRoute } from "~/lib/directories/directories.selectors";
import { NavigationSectionVariant } from "~/lib/helpers/nextra";
import {
  setScrollPositionFromBottom,
  setShouldScrollToPageTop,
} from "~/lib/scroll-to-page-top/scroll-to-page-top.redux";

import { DeterministicIconArticle, IconTime } from "../../Icons";

export type NavigationCardLinkProps = {
  title: string;
  topTitle?: string;
  description?: string;
  icon?: React.ReactNode;
  readTime?: string;
  readType?: string;
  className?: string;
  isMainPage?: boolean;
  variant?: NavigationSectionVariant;
  withScrollToTop?: boolean;
  itemIndex?: number;
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
  variant = "default",
  withScrollToTop = false,
  itemIndex,
  ...linkProps
}) => {
  const { upSm } = useCurrentBreakpoint();

  const dispatch = useAppDispatch();

  const directoriesByRoute = useSelector(selectDirectoriesByRoute);
  const articleIndex = useMemo(
    () => directoriesByRoute[linkProps.href]?.index || itemIndex || 0,
    [directoriesByRoute, linkProps.href]
  );

  const mixpanel = useMixpanel();

  const handleClick = useCallback(() => {
    if (withScrollToTop) {
      const scrollPositionFromBottom = document.documentElement.scrollHeight - window.scrollY;

      dispatch(setScrollPositionFromBottom(scrollPositionFromBottom));
      dispatch(setShouldScrollToPageTop(true));
    }

    mixpanel.trackLinkClick(title, typeof linkProps.href === "string" ? linkProps.href : "", "internal", {
      link_section: topTitle || "navigation",
      read_time: readTime,
      read_type: readType,
      variant,
      is_main_page: isMainPage,
      item_index: itemIndex,
      with_scroll_to_top: withScrollToTop,
    });
  }, [
    dispatch,
    withScrollToTop,
    mixpanel,
    title,
    topTitle,
    readTime,
    readType,
    variant,
    isMainPage,
    itemIndex,
    linkProps.href,
  ]);

  return (
    <Link
      {...linkProps}
      className={clsx(
        `flex gap-6 p-3 sm:p-6 justify-between rounded-lg border border-grey-200 
         hover:shadow-light hover:border-white bg-white dark:bg-grey-900 transition-all`,
        {
          "flex-col sm:h-[304px]": variant === "default",
          "flex-grow": variant === "fancy",
          "dark:border-grey-600 dark:hover:bg-grey-800 dark:hover:border-grey-800": isMainPage,
          "dark:border-grey-900 dark:hover:bg-grey-600 dark:hover:border-grey-600": !isMainPage,
        },
        className
      )}
      onClick={handleClick}
    >
      <div className={clsx({ "flex-grow": variant === "default" })}>
        {icon || <DeterministicIconArticle index={articleIndex} />}
      </div>

      <div
        className={clsx("flex flex-col", {
          "gap-6": variant === "default",
          "gap-2 flex-grow": variant === "fancy",
        })}
      >
        <div
          className={clsx("flex flex-col gap-2", {
            "flex-grow": variant === "fancy",
          })}
        >
          {variant === "default" && topTitle && (
            <p className="text-[10px] leading-none font-medium uppercase text-[#00A5C6] dark:text-[#00A5C6]">
              {topTitle}
            </p>
          )}

          <h3
            className={clsx("text-xl font-medium text-black dark:text-white line-clamp-2", {
              "flex-grow text-right": variant === "fancy",
            })}
          >
            {title}
          </h3>

          {variant === "default" && (upSm || (!upSm && description)) && (
            <p className="text-sm text-grey-400 dark:text-grey-300 line-clamp-3 sm:h-[55px]">{description}</p>
          )}
        </div>

        {(upSm || (!upSm && (readTime || readType))) && (
          <div className="flex justify-between gap-2 flex-wrap sm:h-[24px] overflow-hidden">
            <p className="flex gap-1 items-center">
              {readTime && (
                <>
                  <IconTime /> <span className="text-black dark:text-white">{readTime}</span>
                </>
              )}
            </p>

            <p className="text-black dark:text-white">{readType}</p>
          </div>
        )}
      </div>
    </Link>
  );
};
