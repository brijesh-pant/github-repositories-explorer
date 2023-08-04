import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

/**
 * Display the app header
 */
export default function Header() {
  return (
    <AppBar
      data-testid="header"
      position="static"
      color="transparent"
      elevation={2}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Typography variant="h4" component="div">
          Github Repositories Explorer
        </Typography>
        <Link
          target="_blank"
          href="https://brijesh-pant.github.io/github-repositories-explorer"
          underline="hover"
        >
          Check out the design system here…
        </Link>
      </Box>
    </AppBar>
  );
}
