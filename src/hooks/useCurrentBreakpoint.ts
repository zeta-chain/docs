import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import type { Breakpoint } from "@mui/material/styles";

type UseCurrentBreakpoint = () => {
  currentBreakpoint: Breakpoint | "";
  isSmallDevice: boolean;
  upLg: boolean;
  isMobile: boolean;
  downLg: boolean;
  upSm: boolean;
  upMd: boolean;
  downXl: boolean;
};

export const useCurrentBreakpoint: UseCurrentBreakpoint = () => {
  const theme = useTheme();

  /**
   * 0px to 599px
   */
  const xs = useMediaQuery(theme.breakpoints.only("xs")) && "xs";
  /**
   * 600px to 899px
   */
  const sm = useMediaQuery(theme.breakpoints.only("sm")) && "sm";
  /**
   * 900px to 1199px
   */
  const md = useMediaQuery(theme.breakpoints.only("md")) && "md";
  /**
   * 1200px to 1535px
   */
  const lg = useMediaQuery(theme.breakpoints.only("lg")) && "lg";
  /**
   * +1536px
   */
  const xl = useMediaQuery(theme.breakpoints.only("xl")) && "xl";

  /**
   * >600
   */
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));

  /**
   * >900
   */
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  /**
   * >1200px
   */
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));
  /**
   * <1200px
   */
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  /**
   * <1536px
   */
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));

  /**
   * <900px
   */
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /**
   * <600px
   */
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const currentBreakpoint = xs || sm || md || lg || xl || "";

  return {
    currentBreakpoint,
    isSmallDevice,
    upLg,
    downLg,
    isMobile,
    upSm,
    upMd,
    downXl,
  };
};
