import { configureStore } from "@reduxjs/toolkit";
import { factsApi } from "./facts";

export const store = configureStore({
  reducer: {
    [factsApi.reducerPath]: factsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(factsApi.middleware),
});
