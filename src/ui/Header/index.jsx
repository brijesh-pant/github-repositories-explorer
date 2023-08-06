import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { HeaderSection, LogoSection } from "./styles";

/**
 * Display the app header
 */
export default function Header({ logoSrc, appName }) {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <AppBar
      data-testid="header"
      position="static"
      color="transparent"
      elevation={2}
    >
      <HeaderSection isDesktop={isDesktop}>
        <LogoSection>
          <Avatar alt={appName} src={logoSrc} />
          <Typography variant="h4" component="div">
            Github Repositories Explorer
          </Typography>
        </LogoSection>

        <Button
          target="_blank"
          href="https://brijesh-pant.github.io/github-repositories-explorer"
          underline="hover"
          variant="outlined"
        >
          Check out the docs…
        </Button>
      </HeaderSection>
    </AppBar>
  );
}
