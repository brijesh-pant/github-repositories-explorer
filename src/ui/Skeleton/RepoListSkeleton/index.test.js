import { render, screen } from "@testing-library/react";
import RepoListSkeleton from ".";

test("renders RepoList Skeleton", () => {
  render(<RepoListSkeleton />);
  const elements = screen.queryAllByTestId(/repo-list-item-skeleton/i);
  expect(elements).toHaveLength(5);
});
