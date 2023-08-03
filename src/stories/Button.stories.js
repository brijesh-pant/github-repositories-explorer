import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Small = {
  render: () => (
    <Button variant="contained" size="small">
      Small
    </Button>
  ),
};

export const Medium = {
  render: () => <Button variant="contained">Medium</Button>,
};

export const Large = {
  render: () => (
    <Button variant="contained" size="large">
      Large
    </Button>
  ),
};
