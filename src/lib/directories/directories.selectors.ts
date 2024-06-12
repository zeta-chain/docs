import { createSelector } from "@reduxjs/toolkit";

import ReduxTypes from "../redux.types";

export const selectPages = createSelector(
  (state: ReduxTypes.RootState) => state.directories.pages,
  (pages) => pages
);

export const selectFlatDirectories = createSelector(
  (state: ReduxTypes.RootState) => state.directories.flatDirectories,
  (flatDirectories) => flatDirectories
);

export const selectDirectoriesByRoute = createSelector(
  (state: ReduxTypes.RootState) => state.directories.directoriesByRoute,
  (directoriesByRoute) => directoriesByRoute
);
