import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import SearchInput from "~/components/SearchInput";
import { fetchUsers } from "~/features/users/userSlice";

export default function UserSearchForm({ users }) {
  const dispatch = useDispatch();

  const { usernameQuery, error } = users;

  const onSubmit = useCallback(
    async (values) => {
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
