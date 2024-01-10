import { AspectRatio, Stack, Typography } from "@mui/joy";
import Logo from "../../../assets/logo.svg";

const PhoneHeader = () => {
  return (
    <header style={{ width: "100%", position: "absolute" }}>
      <Stack
        px="2rem"
        py="0.5rem"
        direction="row"
        gap="0.5rem"
        alignItems="center"
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.palette.primary[100]}`,
        })}
      >
        <AspectRatio ratio="1/1" sx={{ width: "2.5rem" }}>
          <img src={Logo} alt="Restaurant logo" />
        </AspectRatio>
        <Typography
          color="primary"
          fontSize="1.125rem"
          fontWeight="600"
          level="h2"
        >
          Restorant Nur
        </Typography>
      </Stack>
    </header>
  );
};

export default PhoneHeader;
