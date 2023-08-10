import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import Stack from "@mui/material/Stack";

import useAppMediaQuery from "~/hooks/useAppMediaQuery";
import { StyledTextField, StyledSubmitButton } from "./styles";

const required = (value: any) => (value ? undefined : "Required");

interface IValues {
  username: string;
}

interface ISearchInput {
  helperText: string | boolean;
  onSubmit: (values: IValues) => void;
}

export default function SearchInput({ helperText, onSubmit }: ISearchInput) {
  const [isDesktop] = useAppMediaQuery();
  const direction = isDesktop ? "row" : "column";
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
              {({ input }) => (
                <StyledTextField
                  {...input}
                  id="username-input"
                  autoComplete="off"
                  fullWidth
                  autoFocus
                  placeholder="Enter username…"
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
