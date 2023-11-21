import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const reducer = {
  users: userSlice.reducer,
};
export const reduxStore = configureStore({
  reducer,
});

export type ReduxState = ReturnType<typeof reduxStore.getState>;
