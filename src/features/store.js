import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "./repos/repoSlice";
import usersReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    repos: reposReducer,
    users: usersReducer,
  },
});
