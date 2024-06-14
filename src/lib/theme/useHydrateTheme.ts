import { ThunkDispatch } from "@reduxjs/toolkit";
import { darkMode } from "@zetachain/ui-toolkit/theme/mui.dark.theme";
import { lightMode } from "@zetachain/ui-toolkit/theme/mui.light.theme";
import { useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";

export const useHydrateTheme = <T extends ThunkDispatch<any, any, any>>({ appDispatch }: { appDispatch: T }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [theme, setInitialTheme] = useState(darkMode);

  // Set theme on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || resolvedTheme;

    if (initialTheme === "dark") {
      setTheme("dark");
      setInitialTheme(darkMode);
    }

    if (initialTheme === "light") {
      setTheme("light");
      setInitialTheme(lightMode);
    }
  }, []);

  return {
    theme,
  };
};
