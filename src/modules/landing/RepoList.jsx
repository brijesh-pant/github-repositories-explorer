import { useEffect } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import RepoListItem from "~/components/RepoListItem";
import LoadingIndicator from "~/ui/LoadingIndicator";
import RepoListSkeleton from "~/ui/Skeleton/RepoListSkeleton";

import { fetchRepos, fetchMoreRepos } from "~/features/repos/repoSlice";

const StyledList = styled(List)(({ theme }) => ({
  height: "80vh",
  width: "100%",
  minWidth: theme.spacing(45),
  backgroundColor: theme.palette.custom[200],
  borderRadius: "6px",
  overflow: "scroll",
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
}));

const RepoList = ({ repos, users }) => {
  const dispatch = useDispatch();
  const { users: userList } = users;
  const { isFetching, selectedUserId, repos: repoMap } = repos;
  const repoList = _.get(repoMap, `[${selectedUserId}].items`, []);
  const lastPage = _.get(repoMap, `[${selectedUserId}].lastPage`, 0);
  const nextPage = _.get(repoMap, `[${selectedUserId}].nextPage`, 0);
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    if (!_.isEmpty(userList) && isDesktop) {
      dispatch(fetchRepos(userList[0].login));
    }
  }, [dispatch, userList, isDesktop]);

  const fetchData = () => {
    dispatch(fetchMoreRepos(selectedUserId, nextPage));
  };

  if (isFetching) {
    return <RepoListSkeleton />;
  }

  return (
    <StyledList id="scrollable-repo-list" data-testid="repo-list">
      <InfiniteScroll
        scrollableTarget="scrollable-repo-list"
        dataLength={nextPage + 10}
        next={fetchData}
        hasMore={nextPage < lastPage}
        loader={<LoadingIndicator />}
      >
        {repoList.map(
          ({
            owner: { avatar_url: avatarSrc },
            name,
            full_name: fullName,
            description,
            html_url: htmlUrl,
            stargazers_count: stargazersCount,
          }) => (
            <RepoListItem
              key={name}
              avatarSrc={avatarSrc}
              description={description}
              fullName={fullName}
              htmlUrl={htmlUrl}
              name={name}
              stargazersCount={stargazersCount}
            />
          )
        )}
      </InfiniteScroll>
    </StyledList>
  );
};

RepoList.propTypes = {
  repos: PropTypes.shape({
    isFetching: PropTypes.bool,
    repos: PropTypes.object,
  }),
  users: PropTypes.shape({
    isFetching: PropTypes.bool,
    users: PropTypes.array,
  }),
};

export default RepoList;
