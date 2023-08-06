import { Grid, Container } from "@mui/material";

import SearchInput from "~/components/SearchInput";
import UserList from "~/modules/landing/UserList";
import RepoList from "~/modules/landing/RepoList";

export default function LandingPage() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <SearchInput />
        </Grid>
        <Grid container spacing={4} item xs={12}>
          <Grid item xs={12} md={4}>
            <UserList />
          </Grid>
          <Grid item xs={12} md={8}>
            <RepoList />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
