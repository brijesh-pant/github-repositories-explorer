import { render, screen } from "@testing-library/react";
import UserListItem from ".";

test("renders UserListItem component", () => {
  render(<UserListItem />);
  const element = screen.getByTestId(/user-list-item/i);
  expect(element).toBeInTheDocument();
});
