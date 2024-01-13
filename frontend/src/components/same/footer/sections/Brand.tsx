import { AspectRatio, Stack, Typography } from "@mui/joy";
import Logo from "../../../../assets/logo.svg";

const Brand = () => {
  return (
    <Stack gap="0.5rem">
      <Typography color="primary" level="h1" fontSize="1.5rem" fontWeight={600}>
        Restorant Nur
      </Typography>
      <AspectRatio ratio="1/1" sx={{ width: "6.25rem" }} objectFit="contain">
        <img src={Logo} alt="Logo of restaurant" />
      </AspectRatio>
    </Stack>
  );
};

export default Brand;
