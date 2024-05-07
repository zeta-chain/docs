import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { themeActions } from "./theme.redux";
import { themeSelectors } from "./theme.redux.selectors";

export const useHydrateTheme = <T extends ThunkDispatch<any, any, any>>({ appDispatch }: { appDispatch: T }) => {
  const theme = useSelector(themeSelectors.selectTheme);

  // Set theme on initial load
  useEffect(() => {
    const systemDefaultTheme = window?.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const storedTheme = localStorage.getItem("color-theme");
    const resolvedTheme = storedTheme || systemDefaultTheme;

    if (resolvedTheme === "dark" || (!window?.matchMedia && !storedTheme)) {
      appDispatch(themeActions.setDarkMode());
      document.documentElement.classList.add("dark");
    }

    if (resolvedTheme === "light") {
      appDispatch(themeActions.setLightMode());
      document.documentElement.classList.remove("dark");
    }
  }, [appDispatch]);

  return {
    theme,
  };
};
