import { configureStore } from "@reduxjs/toolkit";
import { dummyApi } from "./api";
import { myreducer } from "./reducer";
export const store = configureStore({
  reducer: {
    [dummyApi.reducerPath]: dummyApi.reducer,
    [myreducer.name]: myreducer.reducer,
  },
  middleware: (mid) => mid().concat(dummyApi.middleware),
});
