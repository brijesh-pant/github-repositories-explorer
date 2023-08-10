import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

export default function useAppMediaQuery() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return [isDesktop];
}
