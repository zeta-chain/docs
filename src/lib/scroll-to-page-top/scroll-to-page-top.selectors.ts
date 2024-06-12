import { createSelector } from "@reduxjs/toolkit";

import ReduxTypes from "../redux.types";

export const selectShouldScrollToTop = createSelector(
  (state: ReduxTypes.RootState) => state.scrollToPageTop.shouldScrollToTop,
  (shouldScrollToTop) => shouldScrollToTop
);
