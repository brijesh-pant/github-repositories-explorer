import { render, screen } from "@testing-library/react";
import SearchInput from ".";
import ThemeProvider from "~/theme";
import mediaQuery from "css-mediaquery";

function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width) {
  window.matchMedia = createMatchMedia(width);
}

const Wrapper = () => (
  <ThemeProvider>
    <SearchInput onSubmit={() => {}} />
  </ThemeProvider>
);

describe("SearchInput Component", () => {
  it("renders correctly on mobiles screens", () => {
    // Set the screen size to a mobile breakpoint
    resizeScreenSize(500);
    render(<Wrapper />);

    // Verify that the component styles are correct for the mobile breakpoint
    const searchBtnElement = screen.getByTestId("search-input-mobile");
    expect(searchBtnElement).toBeInTheDocument();
  });

  it("renders correctly on desktop screens", () => {
    // Set the screen size to a desktop breakpoint
    resizeScreenSize(1000);
    render(<Wrapper />);

    // Verify that the component styles are correct for the desktop breakpoint
    const searchBtn = screen.getByTestId(/search-input-desktop/i);
    expect(searchBtn).toBeInTheDocument();
  });
});
