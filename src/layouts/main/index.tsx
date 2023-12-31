import { styled } from "@mui/material/styles";
import Header from "~/ui/Header";
import logo from "~/assets/images/logo.png";
import React from "react";

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

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <StyledRoot>
      <Header logoSrc={logo} appName="github-repositories-explorer" />
      <Main>{children}</Main>
    </StyledRoot>
  );
}
