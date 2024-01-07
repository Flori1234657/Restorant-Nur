import { Stack } from "@mui/joy";
import { ReactSVG } from "react-svg";
import Wave from "../../../assets/svg/waves/footer-wave.svg";
import { Brand, Contact, Newsletter, MapLocation, Copyright } from "./sections";

const Footer = () => {
  return (
    <footer>
      <Stack>
        <ReactSVG src={Wave} />
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
