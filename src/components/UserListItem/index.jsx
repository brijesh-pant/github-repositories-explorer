import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { StyledListItemButton } from "./styles";

/**
 * Display the searched github user content
 */
export default function UserListItem({
  avatarSrc,
  name,
  selectedUserId,
  onClick,
}) {
  const handleClick = () => {
    onClick(name);
  };
  const selected = selectedUserId === name;

  return (
    <>
      <StyledListItemButton
        key={name}
        component="li"
        data-testid="user-list-item"
        selected={selected}
        onClick={handleClick}
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
