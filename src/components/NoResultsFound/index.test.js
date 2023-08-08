import { render, screen } from "@testing-library/react";
import ThemeProvider from "~/theme";
import NoResultsFound from ".";

test("renders NoResultsFound", () => {
  render(
    <ThemeProvider>
      <NoResultsFound />
    </ThemeProvider>
  );
  const noResultsElement = screen.getByTestId(/no-results-found/i);
  expect(noResultsElement).toBeInTheDocument();
});
