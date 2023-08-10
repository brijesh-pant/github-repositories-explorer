import { render, screen } from "@testing-library/react";
import RepoListItem from ".";

test("renders RepoListItem component", () => {
  render(
    <RepoListItem
      key="6to5"
      avatarSrc="https://avatars.githubusercontent.com/u/810438?v=4"
      description="Turn ES6+ code into readable vanilla ES5 with source maps and more!"
      fullName="gaearon/6to5"
      htmlUrl="https://github.com/gaearon/6to5"
      name="6to5"
      stargazersCount={2}
    />
  );
  const element = screen.getByTestId(/repo-list-item/i);
  expect(element).toBeInTheDocument();
});
