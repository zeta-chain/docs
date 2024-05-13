import { ListItemButton } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

import { NavItem } from "../Navigation.constants";

interface NavigationItemWrapperProps {
  item: NavItem;
  children: React.ReactNode;
  isSelected: boolean;
  onClick?: () => void;
}

/**
 * Wrapper to control showing an anchor tag, a next/link or a plain button
 * depending on the item behavior
 */
export const NavigationItemWrapper = ({ children, item, onClick }: NavigationItemWrapperProps) => {
  const { url } = item;

  const isExternalLink = useMemo(() => {
    if (!url) return false;

    return url.startsWith("https");
  }, [url]);

  const className = "group px-4 sm:px-6 py-3 hover:bg-grey-50 dark:hover:bg-grey-900";

  // Not a link, default to a normal button
  if (!item.url) {
    return (
      <ListItemButton tabIndex={0} className={className} onClick={onClick}>
        {children}
      </ListItemButton>
    );
  }

  // External link, we want an anchor tag with correct target and rel
  if (isExternalLink) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <ListItemButton className={className}>{children}</ListItemButton>
      </a>
    );
  }

  // Internal link, we want to use next/link
  return (
    <Link href={item.url} onClick={onClick}>
      <ListItemButton className={className}>{children}</ListItemButton>
    </Link>
  );
};
