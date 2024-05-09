import { createSlice } from "@reduxjs/toolkit";

import { THEME_REDUCER_NAME } from "./theme.redux.constants";
import { ThemeInitialState } from "./theme.redux.types";

const initialState: ThemeInitialState = {
  selectedTheme: "dark",
};

export const { actions: themeActions, reducer: themeReducer } = createSlice({
  name: THEME_REDUCER_NAME,
  initialState,
  reducers: {
    setDarkMode(state) {
      state.selectedTheme = "dark";
    },
    setLightMode(state) {
      state.selectedTheme = "light";
    },
    toggleThemeMode(state) {
      state.selectedTheme = state.selectedTheme === "dark" ? "light" : "dark";
    },
  },
});
