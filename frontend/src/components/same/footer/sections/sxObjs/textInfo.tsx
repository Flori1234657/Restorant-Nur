/**
 * Object for writing sx
 * objects for components
 * that share the same style
 */

import { Theme } from "@mui/joy";

export const footerTextInfo = (theme: Theme) => ({
  color: theme.palette.primary[100],
  fontSize: { xs: "0.875rem", md: "0.75rem", lg: "0.7rem", xl: "0.65rem" },
  lineHeight: { xs: "142%", xl: "150%" },
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
  fontSize: { xs: "1.125rem", md: "1rem", lg: "0.9rem", xl: "0.813rem" },
  fontWeight: 600,
  lineHeight: "166%",
});
