import { AspectRatio, Stack, Typography } from "@mui/joy";
import Logo from "../../../../assets/logo.svg";

const Brand = () => {
  return (
    <Stack>
      <Typography level="h1">Restorant Nur</Typography>
      <AspectRatio objectFit="contain">
        <img src={Logo} alt="Logo of restaurant" />
      </AspectRatio>
    </Stack>
  );
};

export default Brand;
