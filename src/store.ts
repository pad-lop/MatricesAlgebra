import { configureStore } from "@reduxjs/toolkit";
import matrixReducer from "./features/matrix/matrixSlice"

export const store = configureStore({
  reducer: {
    matrixes: matrixReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;