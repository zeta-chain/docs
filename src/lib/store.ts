import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { zetaCodeApi } from "../services/zetaCode.service";

export const store = configureStore({
  reducer: {
    [zetaCodeApi.reducerPath]: zetaCodeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(zetaCodeApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
