import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import noResults from "~/assets/images/no-results.png";

export const StyledImg = styled("img")(({ theme }) => ({
  width: theme.spacing(40),
  height: theme.spacing(40),
  [theme.breakpoints.down("md")]: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default function NoResultsFound() {
  return (
    <Grid
      container
      item
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      data-testid="no-results-found"
    >
      <Grid item justifyContent="center">
        <StyledImg src={noResults} />
      </Grid>
      <Typography variant="h1" align="center" gutterBottom>
        No results found.
      </Typography>
      <Typography align="center" component="p">
        Try adjusting your search to find what you're looking for.
      </Typography>
    </Grid>
  );
}
