import { Button, Stack, Typography } from "@mui/joy";
import { ReactSVG } from "react-svg";
import HomeWave from "../../../../../assets/svg/waves/home-wave.svg";
import HoursClosedModal from "./openHours/HoursClosedModal";
import { GiNotebook as Icon } from "react-icons/gi";

const Hero = () => {
  return (
    <Stack>
      <Stack>
        <Typography level="h1">Welcome to our fish restaurant!</Typography>
        <Typography level="body-lg">
          Lorem ipsum dolor sit amet consectetur. Ornare arcu facilisis
          scelerisque laoreet magna a odio. Nullam vitae egestas eget at in.
        </Typography>
        <Button startDecorator={<Icon />}>Book A Table</Button>
        <Stack>
          <HoursClosedModal />
          <ReactSVG src={HomeWave} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
