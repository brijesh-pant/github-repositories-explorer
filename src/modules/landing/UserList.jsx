import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";

import UserListItem from "~/components/UserListItem";
import UserListSkeleton from "~/ui/Skeleton/UserListSkeleton";
import { fetchRepos } from "~/features/repos/repoSlice";

const StyledList = styled(List)(({ theme }) => ({
  height: "100%",
  width: "100%",
  minWidth: theme.spacing(45),
  backgroundColor: theme.palette.custom[200],
  borderRadius: "6px",
  paddingTop: 0,
  paddingBottom: 0,
}));

const UserList = ({ repos, users }) => {
  const dispatch = useDispatch();
  const { isFetching, users: userList } = users;
  const { selectedUserId } = repos;

  const handleClick = useCallback(
    (userId) => {
      dispatch(fetchRepos(userId));
    },
    [dispatch]
  );

  if (isFetching) {
    return <UserListSkeleton />;
  }

  return (
    <StyledList data-testid="user-list">
      {userList.map(({ avatar_url: avatarSrc, login: name }) => (
        <UserListItem
          key={name}
          avatarSrc={avatarSrc}
          name={name}
          selectedUserId={selectedUserId}
          onClick={handleClick}
        />
      ))}
    </StyledList>
  );
};

UserList.propTypes = {
  repos: PropTypes.shape({
    isFetching: PropTypes.bool,
    repos: PropTypes.object,
  }),
  users: PropTypes.shape({
    isFetching: PropTypes.bool,
    users: PropTypes.array,
  }),
};

export default UserList;
