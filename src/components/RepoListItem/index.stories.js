import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import RepoListItem from ".";

import avatar1 from "~/assets/images/avatar/1.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "RepoListItem",
  component: RepoListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

const mockRepos = [
  {
    avatarSrc: avatar1,
    name: "babel-handbook",
    fullName: "gaearon/babel-handbook",
    description:
      ":blue_book: A guided handbook on how to use Babel and how to create plugins for Babel.",
    htmlUrl: "https://github.com/gaearon/babel-handbook",
    stargazersCount: 15,
  },
  {
    avatarSrc: avatar1,
    name: "babel-plugin-flow-comments",
    fullName: "gaearon/babel-plugin-flow-comments",
    description: "Turn flow type annotations into comments.",
    htmlUrl: "https://github.com/gaearon/babel-plugin-flow-comments",
    stargazersCount: 1,
  },
  {
    avatarSrc: avatar1,
    name: "babel-plugin-functional-hmr",
    fullName: "gaearon/babel-plugin-functional-hmr",
    description:
      "Babel plugin enables HMR for functional components in React Native.",
    htmlUrl: "https://github.com/gaearon/babel-plugin-functional-hmr",
    stargazersCount: 7,
  },
  {
    avatarSrc: avatar1,
    name: "babel-plugin-react-transform",
    fullName: "gaearon/babel-plugin-react-transform",
    description:
      "Babel plugin to instrument React components with custom transforms",
    htmlUrl: "https://github.com/gaearon/babel-plugin-react-transform",
    stargazersCount: 1091,
  },
  {
    avatarSrc: avatar1,
    name: "boilerplate-webpack-react",
    fullName: "gaearon/boilerplate-webpack-react",
    description:
      "Boilerplate project for Reactjs with webpack, gulp and stylus",
    htmlUrl: "https://github.com/gaearon/boilerplate-webpack-react",
    stargazersCount: 3,
  },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = {
  render: () => (
    <RepoListItem
      avatarSrc={avatar1}
      fullName="gaearon/boilerplate-webpack-react"
      description="Boilerplate project for Reactjs with webpack, gulp and stylus"
      htmlUrl="https://github.com/gaearon/boilerplate-webpack-react"
      name="boilerplate-webpack-react"
      stargazersCount={1000}
    />
  ),
};

const RepoList = () => (
  <List sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper" }}>
    {mockRepos.map(
      ({
        avatarSrc,
        name,
        fullName,
        description,
        htmlUrl,
        stargazersCount,
      }) => (
        <RepoListItem
          avatarSrc={avatarSrc}
          description={description}
          fullName={fullName}
          htmlUrl={htmlUrl}
          name={name}
          stargazersCount={stargazersCount}
        />
      )
    )}
  </List>
);
export const All = {
  render: () => <RepoList />,
};
