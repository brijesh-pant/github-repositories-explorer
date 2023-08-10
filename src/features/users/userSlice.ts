import { createSlice } from "@reduxjs/toolkit";
import { getUsers, IUser } from "~/services/api";
import { AppDispatch } from "~/features/store";

export const fetchUsers =
  (username: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getUsersFetching(username));
      const users = await getUsers(username);
      dispatch(getUsersSuccess(users));
    } catch (err: any) {
      dispatch(getUsersFailed(err.message));
    }
  };

export interface IUsersInitialState {
  usernameQuery: string;
  isFetching: boolean;
  users: IUser[];
  error: string | null;
}

const initialState: IUsersInitialState = {
  usernameQuery: "",
  isFetching: false,
  users: [],
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersFetching(state, action) {
      state.usernameQuery = action.payload;
      state.isFetching = true;
    },
    getUsersSuccess(state, action) {
      state.isFetching = false;
      state.users = action.payload.items;
      state.error = null;
    },
    getUsersFailed(state, action) {
      state.isFetching = false;
      state.users = [];
      state.error = action.payload;
    },
  },
});

export const { getUsersFetching, getUsersSuccess, getUsersFailed } =
  userSlice.actions;

export default userSlice.reducer;
