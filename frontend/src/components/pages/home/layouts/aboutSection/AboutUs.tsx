import { Stack, Typography, Button } from "@mui/joy";
import { MdRestaurantMenu as Icon } from "react-icons/md";
import SectionHeaders from "../../SectionHeaders";
import { ReactSVG } from "react-svg";
import Blob from "../../../../../assets/svg/blobs/about-us-blob.svg";

const AboutUs = () => {
  return (
    <Stack mx="2rem" alignItems="center">
      <SectionHeaders
        heading="About us"
        subheading="Why come to our fish restaurant?"
      />
      <Stack alignItems="center" gap="1rem">
        <Typography
          textAlign="center"
          fontSize="0.75rem"
          lineHeight="155%"
          fontFamily="'La Belle Aurore', cursive"
          sx={(theme) => ({ color: theme.palette.primary[100] })}
        >
          If you are on vacation in Ksamil and are thinking for a fish
          restaurant to enjoy your meal, then come to our restaurant in Ksamil
          and enjoy an unforgettable experience! Also if you want an halal
          restaurant we are 100% halal! Your food in this restaurant is prepared
          from some of the best chefs! Also we have made it simple for you being
          the 1st restaurant in Ksamil to offer online table reservation! You
          need to try our food to believe us!
        </Typography>
        <Button sx={{ borderRadius: "0.5rem" }} startDecorator={<Icon />}>
          Our Menu
        </Button>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
