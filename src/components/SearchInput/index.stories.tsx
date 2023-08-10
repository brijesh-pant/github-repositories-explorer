import SearchInput from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/SearchInput",
  component: SearchInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = {
  render: () => (
    <SearchInput helperText="Showing results for dan…" onSubmit={() => {}} />
  ),
};
