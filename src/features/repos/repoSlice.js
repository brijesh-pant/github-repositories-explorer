import { createSlice } from "@reduxjs/toolkit";
import { getRepos } from "~/services/api";

export const fetchRepos = (userId, page) => async (dispatch) => {
  try {
    dispatch(getReposFetching(userId));
    const { items, lastPage, nextPage } = await getRepos(userId, page);
    dispatch(getReposSuccess({ userId, items, lastPage, nextPage }));
  } catch (err) {
    dispatch(getReposFailed(err.message));
  }
};

export const fetchMoreRepos = (userId, page) => async (dispatch) => {
  try {
    const { items, lastPage, nextPage } = await getRepos(userId, page);
    dispatch(getMoreReposSuccess({ userId, items, lastPage, nextPage }));
  } catch (err) {
    dispatch(getReposFailed(err.message));
  }
};
const initialState = {
  selectedUserId: null,
  repos: {},
  isFetching: false,
  error: null,
};

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    getReposFetching(state, action) {
      state.selectedUserId = action.payload;
      state.isFetching = true;
    },
    getReposSuccess(state, action) {
      state.isFetching = false;
      state.repos = {
        ...state.repos,
        [action.payload.userId]: {
          items: action.payload.items,
          lastPage: action.payload.lastPage,
          nextPage: action.payload.nextPage,
        },
      };
      state.error = null;
    },
    getMoreReposSuccess(state, action) {
      state.repos[action.payload.userId] = {
        items: [
          ...state.repos[action.payload.userId].items,
          ...action.payload.items,
        ],
        lastPage: action.payload.lastPage,
        nextPage: action.payload.nextPage,
      };
      state.error = null;
    },
    getReposFailed(state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  getReposFetching,
  getReposSuccess,
  getMoreReposSuccess,
  getReposFailed,
} = repoSlice.actions;

export default repoSlice.reducer;
