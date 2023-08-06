import { Box, Grid, Container } from "@mui/material";

import MainLayout from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layouts/Main",
  component: MainLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

const BlankBox = () => <Box height="200px" bgcolor="#f2f5fd" />;

export const Basic = {
  render: () => (
    <MainLayout>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <BlankBox />
          </Grid>
          <Grid container spacing={4} item xs={12}>
            <Grid item xs={12} md={4}>
              <BlankBox />
            </Grid>
            <Grid item xs={12} md={8}>
              <BlankBox />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <BlankBox />
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  ),
};
