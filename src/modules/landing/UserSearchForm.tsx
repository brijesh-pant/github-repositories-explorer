import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import SearchInput from "~/components/SearchInput";
import { fetchUsers, IUsersInitialState } from "~/features/users/userSlice";
import { useAppDispatch } from "~/features/hooks";

interface IUserSearchForm {
  users: IUsersInitialState;
}

interface IValues {
  username: string;
}

export default function UserSearchForm({ users }: IUserSearchForm) {
  const dispatch = useAppDispatch();

  const { usernameQuery, error } = users;

  const onSubmit = useCallback(
    async (values: IValues) => {
      dispatch(fetchUsers(values.username));
    },
    [dispatch]
  );

  const helperText = useMemo(
    () =>
      Boolean(usernameQuery && !error) &&
      `Showing results for ${usernameQuery}…`,
    [usernameQuery, error]
  );

  return <SearchInput helperText={helperText} onSubmit={onSubmit} />;
}

UserSearchForm.propTypes = {
  users: PropTypes.shape({
    isFetching: PropTypes.bool,
    users: PropTypes.array,
  }),
};
