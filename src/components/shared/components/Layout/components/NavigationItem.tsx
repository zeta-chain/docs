import { ListItem } from "@mui/material";
import clsx from "clsx";
import { useRouter } from "next/router";
import { createElement, useMemo } from "react";

import { NavItem } from "../Layout.constants";
import { NavigationItemWrapper } from "./NavigationItemWrapper";

const nonSelectedColor =
  "text-grey-500 group-hover:text-green-100 dark:text-grey-300 dark:group-hover:text-green-100 transition-all";

interface NavigationItemProps {
  item: NavItem;
  isOpen: boolean;
  withLabel?: boolean;
  onClick?: () => void;
}

export const NavigationItem = ({ item, isOpen, withLabel = true, onClick }: NavigationItemProps) => {
  const { label, url, icon } = item;

  const router = useRouter();

  const isSelected = useMemo(() => {
    if (!url) {
      return false;
    }

    if (router.pathname === "/" || url === "/") {
      return url === router.pathname;
    }

    return router.pathname.startsWith(url);
  }, [url, router.pathname]);

  return (
    <ListItem
      className={clsx("p-0 block", {
        "text-green-100 dark:text-green-100 font-medium": isSelected,
      })}
    >
      <NavigationItemWrapper item={item} isSelected={isSelected} onClick={onClick}>
        {icon && (
          <div
            className={clsx("flex items-center justify-center w-5 h-5 mr-1 flex-shrink-0", {
              [nonSelectedColor]: !isSelected,
            })}
          >
            {createElement(icon, {
              className: "currentColor",
            })}
          </div>
        )}

        {isOpen && (
          <p
            className={clsx("font-inter text-sm transition-all", {
              [nonSelectedColor]: !isSelected,
              "sm:opacity-0": !withLabel,
            })}
          >
            {label}
          </p>
        )}
      </NavigationItemWrapper>
    </ListItem>
  );
};
