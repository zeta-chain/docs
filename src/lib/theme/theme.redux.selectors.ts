import { createSelector } from "@reduxjs/toolkit";
import { darkMode } from "@zetachain/ui-toolkit/theme/mui.dark.theme";
import { lightMode } from "@zetachain/ui-toolkit/theme/mui.light.theme";

import { ThemeInitialState } from "./theme.redux.types";

export const selectIsDarkMode = createSelector(
  (state: { theme: ThemeInitialState }) => state.theme,
  (theme) => theme.selectedTheme === "dark"
);

export const selectTheme = createSelector(selectIsDarkMode, (isDark) => (isDark ? darkMode : lightMode));

export const themeSelectors = {
  selectIsDarkMode,
  selectTheme,
};
