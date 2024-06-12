import { createSelector } from "@reduxjs/toolkit";

import ReduxTypes from "../redux.types";

export const selectScrollPositionFromBottom = createSelector(
  (state: ReduxTypes.RootState) => state.scrollToPageTop.scrollPositionFromBottom,
  (scrollPositionFromBottom) => scrollPositionFromBottom
);

export const selectShouldScrollToTop = createSelector(
  (state: ReduxTypes.RootState) => state.scrollToPageTop.shouldScrollToTop,
  (shouldScrollToTop) => shouldScrollToTop
);
