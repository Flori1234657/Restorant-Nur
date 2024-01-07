import { AspectRatio, Stack, Typography } from "@mui/joy";
import Logo from "../../../assets/logo.svg";

const PhoneHeader = () => {
  return (
    <header>
      <Stack>
        <Stack>
          <AspectRatio>
            <img src={Logo} alt="Restaurant logo" />
          </AspectRatio>
          <Typography level="h2">Restorant Nur</Typography>
        </Stack>
      </Stack>
    </header>
  );
};

export default PhoneHeader;
