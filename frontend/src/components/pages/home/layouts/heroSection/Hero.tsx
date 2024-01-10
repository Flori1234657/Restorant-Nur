import { AspectRatio, Button, Stack, Typography } from "@mui/joy";
import { ReactSVG } from "react-svg";
import HomeWave from "../../../../../assets/svg/waves/home-wave.svg";
import HoursClosedModal from "./openHours/HoursClosedModal";
import { GiNotebook as Icon } from "react-icons/gi";
import BgImg from "../../../../../assets/webp/home/hero-image-placeholder.webp";

const Hero = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack mx="2rem" mt="7.06rem" alignItems="center" gap="0.5rem">
        <Typography
          level="h1"
          color="primary"
          fontSize="2.25rem"
          lineHeight="133%"
          textAlign="center"
        >
          Welcome to our fish restaurant!
        </Typography>
        <Typography
          level="body-lg"
          fontSize="1rem"
          textAlign="center"
          sx={(theme) => ({ color: theme.palette.primary[100] })}
        >
          Lorem ipsum dolor sit amet consectetur. Ornare arcu facilisis
          scelerisque laoreet magna a odio. Nullam vitae egestas eget at in.
        </Typography>
        <Button
          fullWidth
          size="md"
          sx={{ mt: "0.5rem", height: "40px", borderRadius: "0.5rem" }}
          startDecorator={<Icon />}
        >
          Book A Table
        </Button>
      </Stack>
      <Stack position="relative" mt="4.25rem">
        <HoursClosedModal />
        <AspectRatio sx={{ width: "100%" }} ratio="2.81">
          <img src={HomeWave} alt="" />
        </AspectRatio>
      </Stack>
    </Stack>
  );
};

export default Hero;
