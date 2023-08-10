import { styled } from "@mui/material/styles";
import useAppMediaQuery from "~/hooks/useAppMediaQuery";

export const HeaderSection = styled("div")(({ theme }) => {
  const [isDesktop] = useAppMediaQuery();
  return {
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  };
});

export const LogoSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& .MuiTypography-root": {
    marginLeft: theme.spacing(2),
  },
}));
