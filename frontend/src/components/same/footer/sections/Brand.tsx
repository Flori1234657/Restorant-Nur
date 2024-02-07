import { AspectRatio, Stack, Typography } from "@mui/joy";
import Logo from "../../../../assets/logo.svg";

const Brand = () => {
  return (
    <Stack gap="0.5rem">
      <Typography
        color="primary"
        level="h1"
        sx={{
          fontSize: {
            xs: "1.5rem",
            md: "1.25rem",
            lg: "1.2rem",
            xl: "1.219rem",
          },
          lineHeight: { xl: "133%" },
          fontWeight: 600,
        }}
      >
        Restorant Nur
      </Typography>
      <AspectRatio
        ratio="1/1"
        sx={{ width: { xs: "6.25rem", md: "4.978rem" } }}
        objectFit="contain"
      >
        <img src={Logo} alt="Logo of restaurant" />
      </AspectRatio>
    </Stack>
  );
};

export default Brand;
