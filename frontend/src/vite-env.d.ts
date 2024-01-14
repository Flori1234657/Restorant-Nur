/// <reference types="vite/client" />
// You can put this to any file that's included in your tsconfig
import type { PaletteRange } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    secondary: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    secondary: {
      black1: string;
      black2: string;
      black3: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
    };
  }

  interface Shadow {
    navItMobile: string;
  }
}
