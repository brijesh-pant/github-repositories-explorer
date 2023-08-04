import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";

export const StyledListItemButton = styled(ListItemButton)({
  "& .MuiListItemAvatar-root": {
    marginTop: 0,
  },
  "& .MuiListItemText-root": {
    marginTop: 0,
    marginBottom: 0,
  },
});
