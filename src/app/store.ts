import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storeSaga from "./stooreSaga";

import signsSlice from "../features/signs/signsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    signs: signsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(storeSaga)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;