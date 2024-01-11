import { AspectRatio, Stack } from "@mui/joy";
import Wave from "../../../assets/svg/waves/footer-ph-wave.svg";
import { Brand, Contact, Newsletter, MapLocation, Copyright } from "./sections";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <Stack>
        <AspectRatio ratio="3.4">
          <img src={Wave} alt="Wave shape" />
        </AspectRatio>
        <Stack>
          <Brand />
          <Contact />
          <Newsletter />
          <MapLocation />
        </Stack>
        <Copyright />
      </Stack>
    </footer>
  );
};

export default Footer;
