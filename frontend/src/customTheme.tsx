import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#FFF7EB",
          100: "#FFEBCE",
          200: "#FFD89E",
          300: "#FFC56D",
          400: "#FFB23D",
          500: "#FF9F0D",
          600: "#CC7F0A",
          700: "#995F07",
          800: "#663F05",
          900: "#331F02",
        },
        success: {
          50: "#E7FBE6",
          100: "#CFF8CE",
          200: "#9FF29D",
          300: "#6FEC6C",
          400: "#3ee63b",
          500: "#0FE00B",
          600: "#0CB308",
          700: "#098606",
          800: "#065904",
          900: "#032C02",
        },
        warning: {
          50: "#FDFEE6",
          100: "#FCFDCE",
          200: "#F9FB9D",
          300: "#F6F96D",
          400: "#f3f73c",
          500: "#F0F50C",
          600: "#C0C409",
          700: "#909307",
          800: "#606204",
          900: "#303102",
        },
        danger: {
          50: "#FEE6E6",
          100: "#FDCECE",
          200: "#FB9D9D",
          300: "#F96D6D",
          400: "#F73C3C",
          500: "#F50C0C",
          600: "#C40909",
          700: "#930707",
          800: "#620404",
          900: "#310202",
        },
        neutral: {
          50: "#EBF3FF",
          100: "#f0f4f8",
          200: "#9EC4FF",
          300: "#6da7ff",
          400: "#3D8AFF",
          500: "#0D6DFF",
          600: "#0A57CC",
          700: "#074199",
          800: "#052B66",
          900: "#021533",
        },
        secondary: {
          black1: "#1E1E1E",
          black2: "#1D1D1D",
          black3: "#282828",
          gray1: "#333333",
          gray2: "#4F4F4F",
          gray3: "#282828",
          gray4: "#BDBDBD",
          gray5: "#E0E0E0",
        },
        common: {
          white: "#331F02", //Button primary 900
        },
      },
    },
  },
  shadow: {
    xs: "0px 0px 24px -45px #FF9F0D, 0px 2px 20px 0px #FF9F0D",
    navItMobile: "0px 0px 24px -45px #331F02, 0px 2px 20px 0px #331F02",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "xs" && {
            "--Icon-fontSize": "1rem",
            "--Button-gap": "0.25rem",
            minHeight: "1.625rem",
            fontSize: "0.75rem",
            paddingBlock: "2px",
            paddingInline: "0.5rem",
          }),
          borderRadius: "0.5rem",
        }),
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: { borderRadius: "0.5rem" },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          lineHeight: "150%",
        },
      },
    },
  },
});

export default theme;
