import { styled } from "@mui/material/styles";
import Header from "~/ui/Header";
import logo from "~/assets/images/avatar/logo.png";

const StyledRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  padding: theme.spacing(3, 1),
}));

export default function MainLayout({ children }) {
  return (
    <StyledRoot>
      <Header logoSrc={logo} appName="github-repositories-explorer" />
      <Main>{children}</Main>
    </StyledRoot>
  );
}
