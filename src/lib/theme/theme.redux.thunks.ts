import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import { themeActions } from "./theme.redux";
import { ThemeInitialState } from "./theme.redux.types";

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, { theme: ThemeInitialState }, unknown, AnyAction>;

export const updateThemeMode = (): AppThunk => async (dispatch, getState) => {
  const state = getState();

  if (state.theme.selectedTheme === "dark") {
    // Set light mode
    dispatch(themeActions.setLightMode());
    localStorage.setItem("color-theme", "light");
    document.documentElement.classList.remove("dark");
  } else {
    // Set dark mode
    dispatch(themeActions.setDarkMode());
    localStorage.setItem("color-theme", "dark");
    document.documentElement.classList.add("dark");
  }
};

export const setDarkMode = (): AppThunk => async (dispatch) => {
  dispatch(themeActions.setDarkMode());
  localStorage.setItem("color-theme", "dark");
  document.documentElement.classList.add("dark");
};
