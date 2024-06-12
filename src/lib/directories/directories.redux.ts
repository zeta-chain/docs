import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Page } from "nextra";

import { DirectoriesByRoute, PageWithMeta } from "../helpers/nextra";

const DIRECTORIES_SLICE_NAME = "directories";

type DirectoriesState = {
  pages: Page[];
  flatDirectories: PageWithMeta[];
  directoriesByRoute: DirectoriesByRoute;
};

const initialState: DirectoriesState = {
  pages: [],
  flatDirectories: [],
  directoriesByRoute: {},
};

export const directoriesSlice = createSlice({
  name: DIRECTORIES_SLICE_NAME,
  initialState,
  reducers: {
    setPages: (state, { payload }: PayloadAction<Page[]>) => {
      state.pages = payload;
    },
    setDirectories: (
      state,
      { payload }: PayloadAction<{ flatDirectories: PageWithMeta[]; directoriesByRoute: DirectoriesByRoute }>
    ) => {
      state.flatDirectories = payload.flatDirectories;
      state.directoriesByRoute = payload.directoriesByRoute;
    },
  },
});

export const { setPages, setDirectories } = directoriesSlice.actions;

export const directoriesReducer = directoriesSlice.reducer;
