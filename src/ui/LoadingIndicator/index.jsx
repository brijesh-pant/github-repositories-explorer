import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

/**
 * Display the loading indicator
 */
export default function LoadingIndicator() {
  return (
    <Box
      data-testid="loading-indicator"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}
