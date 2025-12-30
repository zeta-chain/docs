import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Page } from "nextra";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import tw, { styled } from "twin.macro";

import { getPageTitle } from "~/lib/helpers/nextra";

import { IconDropDown } from "../../Icons";

const StyledAccordion = styled(Accordion)`
  ${tw`py-3 sm:py-2 last:pb-0 shadow-none bg-none bg-[transparent] border-none`}
  box-shadow: none;

  :before,
  :after {
    ${tw`!bg-[transparent] !bg-none`}
  }
`;

type NavigationAccordionLinkProps = PropsWithChildren<{
  page: Page;
  onClick?: () => void;
  isTopLevelPage?: boolean;
}>;

const NavigationAccordion: React.FC<NavigationAccordionLinkProps> = ({ page, children }) => {
  const router = useRouter();
  const isRouteInAccordion = router.pathname.includes(page.route);

  const [expanded, setExpanded] = useState<string | false>(isRouteInAccordion ? page.route : false);

  const handleChange = (route: string) => (_event: React.SyntheticEvent, isExpanded: boolean) =>
    setExpanded(isExpanded ? route : false);

  useEffect(() => {
    if (isRouteInAccordion) setExpanded(page.route);
  }, [isRouteInAccordion, page.route]);

  return (
    <StyledAccordion expanded={expanded === page.route} onChange={handleChange(page.route)}>
      <AccordionSummary
        className="p-0 m-0 min-h-0 group"
        expandIcon={
          <IconDropDown
            className={clsx({
              "text-grey-400 dark:text-grey-300 group-hover:text-grey-500 dark:group-hover:text-white": !expanded,
              "text-grey-500 dark:text-white": expanded,
            })}
          />
        }
        classes={{ content: "p-0 pr-1 m-0 whitespace-pre-wrap text-ellipsis overflow-hidden" }}
      >
        <div
          className={clsx("text-base leading-[130%] sm:text-xs sm:leading-[110%]", {
            "text-grey-400 dark:text-grey-300 group-hover:text-grey-500 dark:group-hover:text-white": !expanded,
            "text-grey-500 dark:text-white": expanded,
          })}
        >
          {getPageTitle(page)}
        </div>
      </AccordionSummary>

      <AccordionDetails className="p-0 pt-3 sm:pt-2">{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export const NavigationAccordionLink: React.FC<NavigationAccordionLinkProps> = ({ page, onClick, isTopLevelPage }) => {
  const router = useRouter();
  const isRouteSelected = router.pathname === page.route;
  const { locale, defaultLocale } = useRouter();

  if (page.kind !== "Folder") {
    return (
      <Link
        href={page.route}
        className={clsx("flex py-3 sm:py-2 last:pb-0 group", {
          "text-green-100 dark:text-green-100 hover:!text-green-100 dark:hover:!text-green-100": isRouteSelected,
          "text-grey-400 dark:text-grey-300 hover:!text-green-100 dark:hover:!text-green-100": !isRouteSelected,
        })}
        onClick={onClick}
      >
        {!isTopLevelPage && (
          <div
            className={clsx("w-1 h-1 ml-1 mr-2 mt-2 sm:mt-[5px] shrink-0 transition-all", {
              "bg-green-100 ": isRouteSelected,
              "bg-grey-200 dark:bg-grey-600 group-hover:bg-green-100": !isRouteSelected,
            })}
          />
        )}

        <div className="text-base leading-[130%] sm:text-xs sm:leading-[110%] whitespace-pre-wrap text-ellipsis overflow-hidden">
          {getPageTitle(page)}
        </div>
      </Link>
    );
  }

  // Filter folder children by locale (in development, Nextra includes all locales)
  const currentLocale = locale || defaultLocale;
  const filteredChildren = useMemo(() => {
    const routeToChild = new Map<string, Page>();

    page.children.forEach((child) => {
      // Always include folders - they are containers without locale
      if (child.kind === "Folder") {
        if (!routeToChild.has(child.route)) {
          routeToChild.set(child.route, child);
        }
        return;
      }

      // Extract locale from page name or use page.locale property
      const getChildLocale = (p: Page): string | undefined => {
        if ("locale" in p && p.locale) return p.locale as string;
        const nameParts = p.name.split(".");
        if (nameParts.length > 1) {
          const suffix = nameParts[nameParts.length - 1];
          if (suffix === "en-US" || suffix === "zh-CN") return suffix;
        }
        return undefined;
      };

      const childLocale = getChildLocale(child);

      // Only include children matching current locale
      if (childLocale) {
        if (childLocale !== currentLocale) return;
      } else {
        // No locale - only include on default locale
        if (currentLocale !== defaultLocale) return;
      }

      // Deduplicate by route
      if (!routeToChild.has(child.route)) {
        routeToChild.set(child.route, child);
      }
    });

    return Array.from(routeToChild.values());
  }, [page.children, currentLocale, defaultLocale]);

  return (
    <NavigationAccordion page={page}>
      <div className="flex flex-col">
        {filteredChildren.map((child) => (
          <NavigationAccordionLink key={child.route} page={child} onClick={onClick} />
        ))}
      </div>
    </NavigationAccordion>
  );
};
