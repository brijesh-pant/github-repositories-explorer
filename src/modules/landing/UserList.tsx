import PropTypes from "prop-types";
import { useCallback } from "react";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";

import UserListItem from "~/components/UserListItem";
import UserListSkeleton from "~/ui/Skeleton/UserListSkeleton";
import { IUsersInitialState } from "~/features/users/userSlice";
import { fetchRepos, IReposInitialState } from "~/features/repos/repoSlice";
import { useAppDispatch } from "~/features/hooks";

const StyledList = styled(List)(({ theme }) => ({
  height: "100%",
  width: "100%",
  minWidth: theme.spacing(45),
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.spacing(0.75),
  paddingTop: 0,
  paddingBottom: 0,
}));

interface IUserList {
  repos: IReposInitialState;
  users: IUsersInitialState;
}

const UserList = ({ repos, users }: IUserList) => {
  const dispatch = useAppDispatch();
  const { isFetching, users: userList } = users;
  const { selectedUserId } = repos;

  const handleClick = useCallback(
    (userId: string) => {
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
