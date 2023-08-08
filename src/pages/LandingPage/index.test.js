import { Provider } from "react-redux";
import ThemeProvider from "~/theme";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { store } from "~/features/store";
import LandingPage from ".";

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get("https://api.github.com/search/users", (req, res, ctx) => {
    return res(
      ctx.json({
        total_count: 1117472,
        incomplete_results: false,
        items: [
          {
            login: "Super45coder",
            id: 80135238,
            node_id: "MDQ6VXNlcjgwMTM1MjM4",
            avatar_url: "https://avatars.githubusercontent.com/u/80135238?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/Super45coder",
            html_url: "https://github.com/Super45coder",
            followers_url:
              "https://api.github.com/users/Super45coder/followers",
            following_url:
              "https://api.github.com/users/Super45coder/following{/other_user}",
            gists_url:
              "https://api.github.com/users/Super45coder/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/Super45coder/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/Super45coder/subscriptions",
            organizations_url: "https://api.github.com/users/Super45coder/orgs",
            repos_url: "https://api.github.com/users/Super45coder/repos",
            events_url:
              "https://api.github.com/users/Super45coder/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/Super45coder/received_events",
            type: "User",
            site_admin: false,
            score: 1.0,
          },
        ],
      }),
      ctx.delay(150)
    );
  }),
  rest.get("https://api.github.com/users/:username/repos", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 22483615,
          node_id: "MDEwOlJlcG9zaXRvcnkyMjQ4MzYxNQ==",
          name: ".dotfiles",
          full_name: "A/.dotfiles",
          private: false,
          owner: {
            login: "A",
            id: 1410106,
            node_id: "MDQ6VXNlcjE0MTAxMDY=",
            avatar_url: "https://avatars.githubusercontent.com/u/1410106?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/A",
            html_url: "https://github.com/A",
            followers_url: "https://api.github.com/users/A/followers",
            following_url:
              "https://api.github.com/users/A/following{/other_user}",
            gists_url: "https://api.github.com/users/A/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/A/starred{/owner}{/repo}",
            subscriptions_url: "https://api.github.com/users/A/subscriptions",
            organizations_url: "https://api.github.com/users/A/orgs",
            repos_url: "https://api.github.com/users/A/repos",
            events_url: "https://api.github.com/users/A/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/A/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/A/.dotfiles",
          description: "configs and utils",
          fork: false,
          url: "https://api.github.com/repos/A/.dotfiles",
          forks_url: "https://api.github.com/repos/A/.dotfiles/forks",
          keys_url: "https://api.github.com/repos/A/.dotfiles/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/A/.dotfiles/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/A/.dotfiles/teams",
          hooks_url: "https://api.github.com/repos/A/.dotfiles/hooks",
          issue_events_url:
            "https://api.github.com/repos/A/.dotfiles/issues/events{/number}",
          events_url: "https://api.github.com/repos/A/.dotfiles/events",
          assignees_url:
            "https://api.github.com/repos/A/.dotfiles/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/A/.dotfiles/branches{/branch}",
          tags_url: "https://api.github.com/repos/A/.dotfiles/tags",
          blobs_url: "https://api.github.com/repos/A/.dotfiles/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/A/.dotfiles/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/A/.dotfiles/git/refs{/sha}",
          trees_url: "https://api.github.com/repos/A/.dotfiles/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/A/.dotfiles/statuses/{sha}",
          languages_url: "https://api.github.com/repos/A/.dotfiles/languages",
          stargazers_url: "https://api.github.com/repos/A/.dotfiles/stargazers",
          contributors_url:
            "https://api.github.com/repos/A/.dotfiles/contributors",
          subscribers_url:
            "https://api.github.com/repos/A/.dotfiles/subscribers",
          subscription_url:
            "https://api.github.com/repos/A/.dotfiles/subscription",
          commits_url: "https://api.github.com/repos/A/.dotfiles/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/A/.dotfiles/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/A/.dotfiles/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/A/.dotfiles/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/A/.dotfiles/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/A/.dotfiles/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/A/.dotfiles/merges",
          archive_url:
            "https://api.github.com/repos/A/.dotfiles/{archive_format}{/ref}",
          downloads_url: "https://api.github.com/repos/A/.dotfiles/downloads",
          issues_url:
            "https://api.github.com/repos/A/.dotfiles/issues{/number}",
          pulls_url: "https://api.github.com/repos/A/.dotfiles/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/A/.dotfiles/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/A/.dotfiles/notifications{?since,all,participating}",
          labels_url: "https://api.github.com/repos/A/.dotfiles/labels{/name}",
          releases_url:
            "https://api.github.com/repos/A/.dotfiles/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/A/.dotfiles/deployments",
          created_at: "2014-07-31T20:22:08Z",
          updated_at: "2023-07-22T09:38:28Z",
          pushed_at: "2023-08-08T08:18:31Z",
          git_url: "git://github.com/A/.dotfiles.git",
          ssh_url: "git@github.com:A/.dotfiles.git",
          clone_url: "https://github.com/A/.dotfiles.git",
          svn_url: "https://github.com/A/.dotfiles",
          homepage: "",
          size: 7371,
          stargazers_count: 76,
          watchers_count: 76,
          language: "Lua",
          has_issues: true,
          has_projects: false,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          has_discussions: false,
          forks_count: 7,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ["ansible", "dotfiles", "neovim", "tmux", "zsh"],
          visibility: "public",
          forks: 7,
          open_issues: 0,
          watchers: 76,
          default_branch: "master",
        },
        {
          id: 440884304,
          node_id: "R_kgDOGkdcUA",
          name: "ansible_docker_compose",
          full_name: "A/ansible_docker_compose",
          private: false,
          owner: {
            login: "A",
            id: 1410106,
            node_id: "MDQ6VXNlcjE0MTAxMDY=",
            avatar_url: "https://avatars.githubusercontent.com/u/1410106?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/A",
            html_url: "https://github.com/A",
            followers_url: "https://api.github.com/users/A/followers",
            following_url:
              "https://api.github.com/users/A/following{/other_user}",
            gists_url: "https://api.github.com/users/A/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/A/starred{/owner}{/repo}",
            subscriptions_url: "https://api.github.com/users/A/subscriptions",
            organizations_url: "https://api.github.com/users/A/orgs",
            repos_url: "https://api.github.com/users/A/repos",
            events_url: "https://api.github.com/users/A/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/A/received_events",
            type: "User",
            site_admin: false,
          },
          html_url: "https://github.com/A/ansible_docker_compose",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/A/ansible_docker_compose",
          forks_url:
            "https://api.github.com/repos/A/ansible_docker_compose/forks",
          keys_url:
            "https://api.github.com/repos/A/ansible_docker_compose/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/A/ansible_docker_compose/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/A/ansible_docker_compose/teams",
          hooks_url:
            "https://api.github.com/repos/A/ansible_docker_compose/hooks",
          issue_events_url:
            "https://api.github.com/repos/A/ansible_docker_compose/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/A/ansible_docker_compose/events",
          assignees_url:
            "https://api.github.com/repos/A/ansible_docker_compose/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/A/ansible_docker_compose/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/A/ansible_docker_compose/tags",
          blobs_url:
            "https://api.github.com/repos/A/ansible_docker_compose/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/A/ansible_docker_compose/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/A/ansible_docker_compose/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/A/ansible_docker_compose/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/A/ansible_docker_compose/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/A/ansible_docker_compose/languages",
          stargazers_url:
            "https://api.github.com/repos/A/ansible_docker_compose/stargazers",
          contributors_url:
            "https://api.github.com/repos/A/ansible_docker_compose/contributors",
          subscribers_url:
            "https://api.github.com/repos/A/ansible_docker_compose/subscribers",
          subscription_url:
            "https://api.github.com/repos/A/ansible_docker_compose/subscription",
          commits_url:
            "https://api.github.com/repos/A/ansible_docker_compose/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/A/ansible_docker_compose/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/A/ansible_docker_compose/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/A/ansible_docker_compose/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/A/ansible_docker_compose/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/A/ansible_docker_compose/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/A/ansible_docker_compose/merges",
          archive_url:
            "https://api.github.com/repos/A/ansible_docker_compose/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/A/ansible_docker_compose/downloads",
          issues_url:
            "https://api.github.com/repos/A/ansible_docker_compose/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/A/ansible_docker_compose/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/A/ansible_docker_compose/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/A/ansible_docker_compose/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/A/ansible_docker_compose/labels{/name}",
          releases_url:
            "https://api.github.com/repos/A/ansible_docker_compose/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/A/ansible_docker_compose/deployments",
          created_at: "2021-12-22T14:26:59Z",
          updated_at: "2023-03-09T03:03:18Z",
          pushed_at: "2022-08-14T10:56:24Z",
          git_url: "git://github.com/A/ansible_docker_compose.git",
          ssh_url: "git@github.com:A/ansible_docker_compose.git",
          clone_url: "https://github.com/A/ansible_docker_compose.git",
          svn_url: "https://github.com/A/ansible_docker_compose",
          homepage: null,
          size: 10,
          stargazers_count: 2,
          watchers_count: 2,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: "public",
          forks: 0,
          open_issues: 0,
          watchers: 2,
          default_branch: "master",
        },
      ]),
      ctx.delay(150)
    );
  }),
];

const server = setupServer(...handlers);

const Wrapper = () => (
  <Provider store={store}>
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  </Provider>
);

describe("LandingPage Component", () => {
  // Enable API mocking before tests.
  beforeAll(() =>
    server.listen({
      onUnhandledRequest: "warn",
    })
  );

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it("fetches & receives users and repos after entering a username", async () => {
    render(<Wrapper />);

    fireEvent.change(screen.getByPlaceholderText(/Enter username/i), {
      target: { value: "dan" },
    });
    fireEvent.click(screen.getByTestId(/search-button/i));
    await waitFor(() => {
      expect(screen.getByTestId("user-list")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId(/user-list-item/i));
    await waitFor(() => {
      expect(screen.getByTestId("repo-list")).toBeInTheDocument();
    });
  });
});