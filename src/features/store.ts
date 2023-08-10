import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reposReducer from "./repos/repoSlice";
import usersReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    repos: reposReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
