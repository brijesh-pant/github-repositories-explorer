import { render, screen } from "@testing-library/react";
import ThemeProvider from "~/theme";
import LoadingIndicator from ".";

test("renders LoadingIndicator", () => {
  render(
    <ThemeProvider>
      <LoadingIndicator />
    </ThemeProvider>
  );
  const loadingIndicatorElement = screen.getByTestId(/loading-indicator/i);
  expect(loadingIndicatorElement).toBeInTheDocument();
});
