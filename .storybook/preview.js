import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Provider } from "react-redux";
import ThemeProvider from "~/theme";
import { store } from "~/features/store";

const preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </Provider>
    ),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
