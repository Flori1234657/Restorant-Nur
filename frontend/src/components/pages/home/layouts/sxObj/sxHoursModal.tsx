/**
 * Object for writing sx
 * objects for components
 * that share the same style
 */

import { Theme } from "@mui/joy";

export const closedModalTxt = (theme: Theme) => ({
  color: theme.palette.primary[100],
  fontSize: "0.75rem",
  fontWeight: "600",
});
