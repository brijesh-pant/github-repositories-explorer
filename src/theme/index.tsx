import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/400-italic.css";

import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
} from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import GlobalStyles from "./globalStyles";

const themeOptions = {
  palette,
  shape: { borderRadius: 4 },
  typography,
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={createTheme(themeOptions as ThemeOptions)}>
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
