/**
 * Object for writing sx
 * objects for components
 * that share the same style
 */

import { Theme } from "@mui/joy";

export const footerTextInfo = (theme: Theme) => ({
  color: theme.palette.primary[100],
  fontSize: "0.875rem",
  lineHeight: "142%",
});

// @ts-ignore
export const startDecStyles = {
  startDecorator: {
    style: {
      color: "#FFC56D",
    },
  },
};

export const footerHeading = (theme: Theme) => ({
  color: theme.palette.primary[500],
  fontSize: "1.125rem",
  fontWeight: 600,
  lineHeight: "166%",
});
