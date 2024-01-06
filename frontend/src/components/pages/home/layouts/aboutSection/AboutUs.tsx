import { Stack, Typography, Button } from "@mui/joy";
import { MdRestaurantMenu as Icon } from "react-icons/md";
import SectionHeaders from "../../SectionHeaders";
import { ReactSVG } from "react-svg";
import Blob from "../../../../../assets/svg/blobs/about-us-blob.svg";

const AboutUs = () => {
  return (
    <Stack>
      <SectionHeaders
        heading="About us"
        subheading="Why come to our fish restaurant?"
      />
      <Stack>
        <Typography>
          If you are on vacation in Ksamil and are thinking for a fish
          restaurant to enjoy your meal, then come to our restaurant in Ksamil
          and enjoy an unforgettable experience! Also if you want an halal
          restaurant we are 100% halal! Your food in this restaurant is prepared
          from some of the best chefs! Also we have made it simple for you being
          the 1st restaurant in Ksamil to offer online table reservation! You
          need to try our food to believe us!
        </Typography>
        <Button startDecorator={<Icon />}>Our Menu</Button>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
