import { useCallback } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

import { StyledTextField, StyledSubmitButton } from "./styles";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const required = (value) => (value ? undefined : "Required");

export default function SearchInput() {
  const direction = useMediaQuery((theme) => theme.breakpoints.up("md"))
    ? "row"
    : "column";
  const testId =
    direction === "row" ? "search-input-desktop" : "search-input-mobile";

  const onSubmit = useCallback(async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Stack
            data-testid={testId}
            spacing={2}
            direction={direction}
            alignItems="center"
          >
            <Field name="userName" validate={required}>
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
                />
              )}
            </Field>
            <StyledSubmitButton
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
  onSubmit: PropTypes.func,
};
