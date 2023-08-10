import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: theme.spacing(45),
  "& .MuiListItemAvatar-root": {
    marginTop: 0,
  },
  "& .MuiListItemText-root": {
    marginTop: 0,
    marginBottom: 0,
  },
}));
