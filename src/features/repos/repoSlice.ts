import { createSlice } from "@reduxjs/toolkit";
import { getRepos, IRepo } from "~/services/api";
import { AppThunk } from "~/features/store";

export const fetchRepos =
  (userId: string, page?: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getReposFetching(userId));
      const { items, lastPage, nextPage } = await getRepos(userId, page);
      dispatch(getReposSuccess({ userId, items, lastPage, nextPage }));
    } catch (err: any) {
      dispatch(getReposFailed(err.message));
    }
  };

export const fetchMoreRepos =
  (userId: string, page: number): AppThunk =>
  async (dispatch) => {
    try {
      const { items, lastPage, nextPage } = await getRepos(userId, page);
      dispatch(getMoreReposSuccess({ userId, items, lastPage, nextPage }));
    } catch (err: any) {
      dispatch(getReposFailed(err.message));
    }
  };

export interface IRepos {
  items: IRepo[];
  lastPage: number;
  nextPage: number;
}

export interface IReposInitialState {
  selectedUserId: string;
  repos: { [key: string]: IRepos };
  isFetching: boolean;
  error: string | null;
}

const initialState: IReposInitialState = {
  selectedUserId: "",
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
      state.repos = {};
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
