import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SCROLL_TO_PAGE_SLICE_NAME = "scroll-to-page-top";

type ScrollToPageTopState = {
  shouldScrollToTop: boolean;
};

const initialState: ScrollToPageTopState = {
  shouldScrollToTop: false,
};

export const scrollToPageTopSlice = createSlice({
  name: SCROLL_TO_PAGE_SLICE_NAME,
  initialState,
  reducers: {
    setShouldScrollToPageTop: (state, { payload }: PayloadAction<boolean>) => {
      state.shouldScrollToTop = payload;
    },
  },
});

export const { setShouldScrollToPageTop } = scrollToPageTopSlice.actions;

export const scrollToPageTopReducer = scrollToPageTopSlice.reducer;
