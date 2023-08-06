import { render, screen } from "@testing-library/react";
import Header from ".";
import ThemeProvider from "~/theme";

test("renders Header", () => {
  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
  const headerElement = screen.getByTestId(/header/i);
  expect(headerElement).toBeInTheDocument();
});
