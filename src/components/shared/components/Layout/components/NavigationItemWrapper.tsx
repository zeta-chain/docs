import { ListItemButton } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

import { NavItem } from "../Layout.constants";

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
  const { url, clickUrl } = item;

  // Use clickUrl for navigation if provided, otherwise fall back to url
  const navigationUrl = clickUrl || url;

  const isExternalLink = useMemo(() => {
    if (!navigationUrl) return false;

    return navigationUrl.startsWith("https");
  }, [navigationUrl]);

  const className = "group px-4 sm:px-6 py-3 hover:!bg-[transparent] whitespace-nowrap";

  // Not a link, default to a normal button
  if (!navigationUrl) {
    return (
      <ListItemButton tabIndex={0} className={className} onClick={onClick}>
        {children}
      </ListItemButton>
    );
  }

  // External link, we want an anchor tag with correct target and rel
  if (isExternalLink) {
    return (
      <a
        href={navigationUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="hover:!text-green-100"
      >
        <ListItemButton className={className}>{children}</ListItemButton>
      </a>
    );
  }

  // Internal link, we want to use next/link
  return (
    <Link href={navigationUrl} onClick={onClick} className="hover:!text-green-100">
      <ListItemButton className={className}>{children}</ListItemButton>
    </Link>
  );
};
