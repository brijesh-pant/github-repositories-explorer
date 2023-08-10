import { render, screen } from "@testing-library/react";
import UserListSkeleton from ".";

test("renders UserList Skeleton", () => {
  render(<UserListSkeleton />);
  const elements = screen.queryAllByTestId(/user-list-item-skeleton/i);
  expect(elements).toHaveLength(5);
});
