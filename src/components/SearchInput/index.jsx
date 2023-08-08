import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

import { StyledTextField, StyledSubmitButton } from "./styles";

const required = (value) => (value ? undefined : "Required");

export default function SearchInput({ helperText, onSubmit }) {
  const direction = useMediaQuery((theme) => theme.breakpoints.up("md"))
    ? "row"
    : "column";
  const testId =
    direction === "row" ? "search-input-desktop" : "search-input-mobile";

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Stack
            data-testid={testId}
            spacing={2}
            direction={direction}
            alignItems="baseline"
          >
            <Field name="username" validate={required}>
              {({ input, meta }) => (
                <StyledTextField
                  {...input}
                  id="username-input"
                  autoComplete="off"
                  fullWidth
                  autoFocus
                  placeholder="Enter username…"
                  InputLabelProps={{
                    shrink: false,
                    disableUnderline: true,
                  }}
                  helperText={helperText}
                />
              )}
            </Field>
            <StyledSubmitButton
              data-testid={"search-button"}
              fullWidth
              variant="contained"
              type="submit"
              disabled={submitting || pristine}
            >
              Search
            </StyledSubmitButton>
          </Stack>
        </form>
      )}
    />
  );
}

SearchInput.propTypes = {
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onSubmit: PropTypes.func,
};
