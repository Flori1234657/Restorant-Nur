import { Stack, Typography, Button } from "@mui/joy";
import { MdRestaurantMenu as Icon } from "react-icons/md";
import SectionHeaders from "../../SectionHeaders";
import useSizeResponsive from "../../../../../hooks/useSizeResponsive";

const AboutUs = () => {
  const { size } = useSizeResponsive();

  return (
    <Stack sx={{ mx: { xs: "2rem", md: "8.44rem" } }} alignItems="center">
      <SectionHeaders
        heading="About us"
        subheading="Why come to our fish restaurant?"
      />
      <Stack
        alignItems="center"
        gap="1rem"
        sx={{ maxWidth: { md: "25.875rem" } }}
      >
        <Typography
          textAlign="center"
          lineHeight="155%"
          fontFamily="'La Belle Aurore', cursive"
          sx={(theme) => ({
            color: theme.palette.primary[100],
            fontSize: { xs: "0.75rem", md: "1rem" },
          })}
        >
          If you are on vacation in Ksamil and are thinking for a fish
          restaurant to enjoy your meal, then come to our restaurant in Ksamil
          and enjoy an unforgettable experience! Also if you want an halal
          restaurant we are 100% halal! Your food in this restaurant is prepared
          from some of the best chefs! Also we have made it simple for you being
          the 1st restaurant in Ksamil to offer online table reservation! You
          need to try our food to believe us!
        </Typography>
        <Button size={size} startDecorator={<Icon />}>
          Our Menu
        </Button>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
