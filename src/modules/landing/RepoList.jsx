import List from "@mui/material/List";

import RepoListItem from "~/components/RepoListItem";

import avatar1 from "~/assets/images/avatar/1.png";

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

const RepoList = () => {
  return (
    <List
      sx={{
        height: "80vh",
        width: "100%",
        minWidth: 360,
        bgcolor: "custom.200",
        borderRadius: "6px",
        overflow: "scroll",
      }}
    >
      {mockRepos
        .concat(mockRepos)
        .map(
          (
            {
              avatarSrc,
              name,
              fullName,
              description,
              htmlUrl,
              stargazersCount,
            },
            index
          ) => (
            <RepoListItem
              key={index}
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
};

export default RepoList;
