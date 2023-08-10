import { render, screen } from "@testing-library/react";
import Header from ".";
import logo from "~/assets/images/logo.png";
import ThemeProvider from "~/theme";

test("renders Header", () => {
  render(
    <ThemeProvider>
      <Header logoSrc={logo} appName="github-repositories-explorer" />
    </ThemeProvider>
  );
  const headerElement = screen.getByTestId(/header/i);
  expect(headerElement).toBeInTheDocument();
});
