import { AspectRatio, Stack } from "@mui/joy";
import Wave from "../../../assets/svg/waves/footer-ph-wave.svg";
import { Brand, Contact, Newsletter, MapLocation, Copyright } from "./sections";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <AspectRatio ratio="3.4">
        <img src={Wave} alt="Wave shape" />
      </AspectRatio>
      <Stack
        pb="2rem"
        sx={(theme) => ({ bgcolor: theme.palette.secondary.black2 })}
      >
        <Stack mx="2rem" gap="1.5rem">
          <Brand />
          <Contact />
          <Newsletter />
          <MapLocation />
        </Stack>
      </Stack>
      <Copyright />
    </footer>
  );
};

export default Footer;
