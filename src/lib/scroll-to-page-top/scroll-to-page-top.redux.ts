import { createSlice } from "@reduxjs/toolkit";

type ScrollToPageTopState = {
  shouldScrollToTop: boolean;
};

const initialState: ScrollToPageTopState = {
  shouldScrollToTop: false,
};

export const scrollToPageTopSlice = createSlice({
  name: "scroll-to-page-top",
  initialState,
  reducers: {
    setShouldScrollToPageTop: (state, action) => {
      state.shouldScrollToTop = action.payload;
    },
  },
});

export const { setShouldScrollToPageTop } = scrollToPageTopSlice.actions;

export const scrollToPageTopReducer = scrollToPageTopSlice.reducer;
