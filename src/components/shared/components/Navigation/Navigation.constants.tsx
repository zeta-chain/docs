import { CSSObject, styled, Theme } from "@mui/material";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import { ComponentProps } from "react";

import { IconAbout, IconClaim, IconCode, IconCommunity, IconStaking, IconSupport, IconTools } from "../Icons";

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
};

export const navMainItems: NavItem[][] = [
  [
    {
      label: "Build",
      icon: IconCode,
      url: "/developers",
    },
    {
      label: "Validate",
      icon: IconStaking,
      url: "/validators",
    },
    {
      label: "Use",
      icon: IconClaim,
      url: "/users",
    },
  ],
  [
    {
      label: "Tools",
      icon: IconTools,
      url: "/reference",
    },
  ],
];

export const navBottomItems: NavItem[] = [
  {
    label: "About",
    icon: IconAbout,
    url: "/about",
  },
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
];
