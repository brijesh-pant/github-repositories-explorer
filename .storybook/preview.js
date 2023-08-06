import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import ThemeProvider from "~/theme";

const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
