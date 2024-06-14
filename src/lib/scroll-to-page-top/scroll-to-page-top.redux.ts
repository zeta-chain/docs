import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SCROLL_TO_PAGE_SLICE_NAME = "scroll-to-page-top";

type ScrollToPageTopState = {
  scrollPositionFromBottom: number;
  shouldScrollToTop: boolean;
};

const initialState: ScrollToPageTopState = {
  scrollPositionFromBottom: 0,
  shouldScrollToTop: false,
};

export const scrollToPageTopSlice = createSlice({
  name: SCROLL_TO_PAGE_SLICE_NAME,
  initialState,
  reducers: {
    setScrollPositionFromBottom: (state, { payload }: PayloadAction<number>) => {
      state.scrollPositionFromBottom = payload;
    },
    setShouldScrollToPageTop: (state, { payload }: PayloadAction<boolean>) => {
      state.shouldScrollToTop = payload;
    },
  },
});

export const { setScrollPositionFromBottom, setShouldScrollToPageTop } = scrollToPageTopSlice.actions;

export const scrollToPageTopReducer = scrollToPageTopSlice.reducer;
