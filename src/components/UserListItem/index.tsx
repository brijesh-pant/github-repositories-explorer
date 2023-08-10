import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { StyledListItemButton } from "./styles";

interface IUserListItem {
  avatarSrc: string;
  name: string;
  selectedUserId?: string;
  onClick: (userId: string) => void;
}

/**
 * Display the searched github user content
 */
export default function UserListItem({
  avatarSrc,
  name,
  selectedUserId,
  onClick,
}: IUserListItem) {
  const handleClick = () => {
    onClick(name);
  };
  const selected = selectedUserId === name;

  const listItemButtonProps = {
    key: name,
    component: "li",
    selected,
    onClick: handleClick,
  };

  return (
    <>
      <StyledListItemButton
        data-testid="user-list-item"
        {...listItemButtonProps}
      >
        <ListItemAvatar>
          <Avatar alt={name} src={avatarSrc} />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </StyledListItemButton>
      <Divider />
    </>
  );
}

UserListItem.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
  selectedUserId: PropTypes.string,
  onClick: PropTypes.func,
};
