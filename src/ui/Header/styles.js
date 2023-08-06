import { styled } from "@mui/material/styles";

export const HeaderSection = styled("div")(({ theme, isDesktop }) => ({
  display: "flex",
  flexDirection: isDesktop ? "row" : "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
}));

export const LogoSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& .MuiTypography-root": {
    marginLeft: theme.spacing(2),
  },
}));
