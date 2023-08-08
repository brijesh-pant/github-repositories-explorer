import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "~/services/api";

export const fetchUsers = (username) => async (dispatch) => {
  try {
    dispatch(getUsersFetching(username));
    const users = await getUsers(username);
    dispatch(getUsersSuccess(users));
  } catch (err) {
    dispatch(getUsersFailed(err.message));
  }
};
const initialState = {
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
      state.error = action.payload;
    },
  },
});

export const { getUsersFetching, getUsersSuccess, getUsersFailed } =
  userSlice.actions;

export default userSlice.reducer;
