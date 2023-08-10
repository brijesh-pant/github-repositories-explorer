import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(0.75),
    height: theme.spacing(4),
    color: theme.palette.grey[100],
    background: theme.palette.grey[200],
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  fontSize: "14px",
  lineHeight: theme.spacing(2.5),
  marginLeft: theme.spacing(2),
  minWidth: theme.spacing(15),
  width: theme.spacing(15),
  paddingTop: theme.spacing(1.75),
  paddingBottom: theme.spacing(1.75),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
