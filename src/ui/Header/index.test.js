import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders Header", () => {
  render(<Header />);
  const headerElement = screen.getByTestId(/header/i);
  expect(headerElement).toBeInTheDocument();
});
