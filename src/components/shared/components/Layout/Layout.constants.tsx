import { CSSObject, styled, Theme } from "@mui/material";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import { ComponentProps } from "react";

import {
  IconAbout,
  IconClaim,
  IconCode,
  IconCoffeeCup,
  IconCommunity,
  IconServer,
  IconSupport,
  IconTools,
  IconWelcome,
} from "../Icons";

export const openDrawerWidth = 200;
export const closeDrawerWidth = 75;

const openedMixin = (theme: Theme): CSSObject => ({
  width: openDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  borderRight: `1px solid ${theme.palette.divider}`,
  overflowX: "hidden",
});

const closedMixin = (theme: Theme, width = closeDrawerWidth): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: "none",
  borderRight: `1px solid ${theme.palette.divider}`,
  overflowX: "hidden",
  width,
});

export const LeftNavDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "closeDrawerWidth",
})<
  {
    open: boolean;
    closeDrawerWidth?: number;
  } & DrawerProps
>(({ theme, open, closeDrawerWidth: _closeDrawerWidth }) => ({
  width: openDrawerWidth,
  zIndex: 50,
  flexShrink: 0,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme, _closeDrawerWidth),
    "& .MuiDrawer-paper": closedMixin(theme, _closeDrawerWidth),
  }),
}));

export type NavItem = {
  label: string;
  icon?: React.ComponentType<ComponentProps<"svg">>;
  url?: string;
  clickUrl?: string; // Optional URL override for navigation (used when url is for fetching pages but clickUrl is for actual navigation)
};

export const navMainItems: NavItem[][] = [
  [
    {
      label: "Welcome",
      icon: IconWelcome,
      url: "/",
    },
  ],
  [
    {
      label: "Get Started",
      icon: IconCoffeeCup,
      url: "/start",
      clickUrl: "/start/overview",
    },
  ],
  [
    {
      label: "Build",
      icon: IconCode,
      url: "/developers",
      clickUrl: "/developers/overview",
    },
  ],
  [
    {
      label: "Tools",
      icon: IconTools,
      url: "/reference",
      clickUrl: "/reference/overview",
    },
  ],
  [
    {
      label: "Run a Node",
      icon: IconServer,
      url: "/nodes",
      clickUrl: "/nodes/overview",
    },
  ],
  [
    {
      label: "Use",
      icon: IconClaim,
      url: "/users",
      clickUrl: "/users/overview",
    },
  ],
  [
    {
      label: "About",
      icon: IconAbout,
      url: "/about",
      clickUrl: "/about/overview",
    },
  ],
  [
    {
      label: "Support",
      icon: IconSupport,
      url: "/support",
    },
    {
      label: "Community",
      icon: IconCommunity,
      url: "/community",
    },
  ],
];

/**
 * @description List of main/top-level routes. Used to render conditional components/styles for Articles or Sub-Category pages.
 */
export const mainNavRoutes = [
  "/",
  ...[...navMainItems]
    .flat()
    .map((item) => item.url)
    .filter(Boolean),
];
