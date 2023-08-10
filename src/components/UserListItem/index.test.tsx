import { render, screen } from "@testing-library/react";
import UserListItem from ".";

test("renders UserListItem component", () => {
  render(
    <UserListItem
      key="gaearon"
      avatarSrc="https://avatars.githubusercontent.com/u/810438?v=4"
      name="gaearon"
      onClick={() => {}}
      selectedUserId="gaearon"
    />
  );
  const element = screen.getByTestId(/user-list-item/i);
  expect(element).toBeInTheDocument();
});
