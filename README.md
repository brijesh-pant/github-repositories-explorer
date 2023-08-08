# GitHub Repositories Explorer

[![codecov](https://codecov.io/gh/brijesh-pant/github-repositories-explorer/branch/main/graph/badge.svg?token=HSWHTETH4U)](https://codecov.io/gh/brijesh-pant/github-repositories-explorer)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3f4229b4-75a9-482f-a675-7858873d3a01/deploy-status)](https://app.netlify.com/sites/capable-crostata-90a9f7/deploys)
[![CI/CD](https://github.com/brijesh-pant/github-repositories-explorer/actions/workflows/node.js.yml/badge.svg)](https://github.com/brijesh-pant/github-repositories-explorer/actions/workflows/node.js.yml)
[![pages-build-deployment](https://github.com/brijesh-pant/github-repositories-explorer/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/brijesh-pant/github-repositories-explorer/actions/workflows/pages/pages-build-deployment)

A React application which integrates with the [public GitHub REST API](https://docs.github.com/en/rest?apiVersion=2022-11-28) and allows user to search for upto 5 users with a username similar to the value entered in text input and then on click, display repositories (no limit on displayed repositories amount) for selected GitHub user

## Demo

[Netlify](https://www.netlify.com/) is used for automated build and production deployment. Check out the [deployed app](https://capable-crostata-90a9f7.netlify.app/).

[GitHubPages](https://pages.github.com/) is used for automated documentation build and production deployment. Check out the [documentation](https://brijesh-pant.github.io/github-repositories-explorer/).

[Codecov](https://about.codecov.io/) is used for tests code coverage report insights. Check out the [code coverage](https://app.codecov.io/gh/brijesh-pant/github-repositories-explorer).

# App Screenshots

### Web
<table>
  <tr>
    <td><img  alt="Screenshot 2023-08-08 at 16 45 12" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/50945106-3b1f-47ba-b91f-21f82efea404"></td>
    <td><img  alt="Screenshot 2023-08-08 at 16 53 10" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/7ef79373-743a-40d6-8ae5-06ca14f0e6bd"></td>
    <td><img  alt="Screenshot 2023-08-08 at 20 35 02" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/9e767b8d-c9fb-4885-a4f7-eda256a41ee8"></td>
  </tr>
</table>

### Tablet
<table>
  <tr>
    <td><img alt="Screenshot 2023-08-08 at 20 30 02" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/c5d254bb-d895-4b52-a1bb-6c345eb12b76"></td>
    <td><img alt="Screenshot 2023-08-08 at 20 30 37" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/47c895bd-3326-42f3-a961-fde1f69155e7"></td>
    <td><img alt="Screenshot 2023-08-08 at 20 41 34" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/86773422-93f1-4ddb-8694-5c7e029fe7d1"></td>
  </tr>
</table>

### Mobile
<table>
  <tr>
    <td><img alt="Screenshot 2023-08-08 at 20 31 21" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/e2be64b1-377d-49f4-9c67-fd01ca3a7ceb"></td>
    <td><img alt="Screenshot 2023-08-08 at 20 31 02" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/a7cd02a9-0c69-4178-be91-d35a12f26738"></td>
    <td><img alt="Screenshot 2023-08-08 at 20 41 50" src="https://github.com/brijesh-pant/github-repositories-explorer/assets/10848347/610aca08-3221-4cc6-bc29-279b9aaa265a"></td>
  </tr>
</table>

## Built with

- [React.js](https://react.dev/) as main UI library
- [Redux](https://redux-toolkit.js.org/) as state management library
- [Material-UI](https://mui.com/material-ui/) components as an implementation of [Google's Material Design](https://material.io/design)
- [Storybook](https://storybook.js.org/) for building UI components and pages in isolation.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for writing unit and integration tests.
- [MSW](https://mswjs.io/) for mocking API requests in integration tests

# Quick Start

## Prerequisites

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with configurations overridden using [Craco](https://craco.js.org/). To get started with using it you need to:

## Install dependencies

Before starting the app, install all the needed dependencies for the project, running the following command:

```console
$ npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

Runs the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
