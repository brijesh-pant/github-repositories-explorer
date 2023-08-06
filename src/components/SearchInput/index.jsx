import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

import { StyledTextField, StyledSubmitButton } from "./styles";

export default function SearchInput() {
  const direction = useMediaQuery((theme) => theme.breakpoints.up("md"))
    ? "row"
    : "column";
  const testId =
    direction === "row" ? "search-input-desktop" : "search-input-mobile";
  return (
    <Stack
      data-testid={testId}
      spacing={2}
      direction={direction}
      alignItems="center"
    >
      <StyledTextField
        autoComplete="off"
        fullWidth
        InputLabelProps={{
          shrink: false,
          disableUnderline: true,
        }}
        placeholder="Enter username…"
        id="username-input"
      />
      <StyledSubmitButton fullWidth variant="contained">
        Search
      </StyledSubmitButton>
    </Stack>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
};
