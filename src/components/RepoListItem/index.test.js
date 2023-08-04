import { render, screen } from "@testing-library/react";
import RepoListItem from ".";

test("renders RepoListItem component", () => {
  render(<RepoListItem />);
  const element = screen.getByTestId(/repo-list-item/i);
  expect(element).toBeInTheDocument();
});
