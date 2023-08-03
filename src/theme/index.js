import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/400-italic.css";

import PropTypes from "prop-types";

import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import GlobalStyles from "./globalStyles";

const themeOptions = {
  palette,
  shape: { borderRadius: 4 },
  typography,
};

export default function ThemeProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
