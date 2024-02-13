import { Stack, Typography, Button, AspectRatio } from "@mui/joy";
import { MdRestaurantMenu as Icon } from "react-icons/md";
import SectionHeaders from "../../SectionHeaders";
import useSizeResponsive from "../../../../../hooks/useSizeResponsive";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";
import useImagePath from "../../../../../hooks/useImagePath";

const AboutUs = () => {
  const { size } = useSizeResponsive(false);
  const { vw } = useViewPortWidth();

  const blob = useImagePath({
    buildPath: "__",
    developmentPath: `svg/blobs/about-us-blob.svg`,
  });

  return (
    <Stack
      sx={{
        position: "relative",
        mx: "2rem",
        mt: { md: "3rem", lg: "6rem" },
      }}
      alignItems="center"
    >
      <SectionHeaders
        heading="About us"
        subheading="Why come to our fish restaurant?"
      />
      <Stack
        alignItems="center"
        sx={{
          maxWidth: { md: "25.875rem", lg: "27.2rem", xl: "28.282rem" },
          gap: { xs: "1rem", lg: "0.2rem", xl: "0.65rem" },
        }}
      >
        <Typography
          textAlign="center"
          lineHeight="155%"
          fontFamily="'La Belle Aurore', cursive"
          sx={(theme) => ({
            color: theme.palette.primary[100],
            fontSize: {
              xs: "0.75rem",
              md: "1rem",
              lg: "0.9rem",
              xl: "0.975rem",
            },
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
        {/*@ts-ignore*/}
        <Button size={size} startDecorator={<Icon />}>
          Our Menu
        </Button>
      </Stack>
      {vw > 899 ? (
        <AspectRatio
          sx={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            width: { md: "23.438rem", xl: "30rem" },
          }}
          ratio="1.15"
        >
          <img src={blob.imagePath} alt="Blob shape" />
        </AspectRatio>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default AboutUs;
