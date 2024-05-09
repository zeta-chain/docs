/* eslint-disable import/no-default-export */
import { makeStore } from "./app.store";

const store = makeStore();

declare namespace ReduxTypes {
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
}

export default ReduxTypes;
