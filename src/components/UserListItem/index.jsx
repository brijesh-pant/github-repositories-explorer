import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { StyledListItemButton } from "./styles";

/**
 * Display the searched github user content
 */
export default function UserListItem({ avatarSrc, name }) {
  return (
    <>
      <StyledListItemButton
        key={name}
        component="li"
        data-testid="user-list-item"
      >
        <ListItemAvatar>
          <Avatar alt={name} src={avatarSrc} />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </StyledListItemButton>
      <Divider variant="inset" />
    </>
  );
}

UserListItem.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
};
