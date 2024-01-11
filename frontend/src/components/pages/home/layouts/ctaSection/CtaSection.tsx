import { AspectRatio, Button, Stack, Typography } from "@mui/joy";
import Illustration from "../../../../../assets/svg/illustrations/home-cta.svg";
import { GiNotebook as Icon } from "react-icons/gi";
import Blob from "../../../../../assets/svg/blobs/cta-blob.svg";

const CtaSection = () => {
  return (
    <Stack
      mx="2rem"
      mt="6.25rem"
      mb="4.25rem"
      gap="1.25rem"
      alignItems="center"
      position="relative"
    >
      <Stack alignItems="center">
        <Typography
          level="h1"
          textAlign="center"
          color="primary"
          fontSize="1.875rem"
          lineHeight={1.33}
        >
          So what are you waiting for?
        </Typography>
        <Typography
          level="h2"
          textAlign="center"
          fontSize="1rem"
          fontWeight={400}
          sx={(theme) => ({ color: theme.palette.primary[100] })}
        >
          Book your table before someone else take’s it!
        </Typography>
      </Stack>
      <AspectRatio
        ratio="14/9"
        objectFit="contain"
        sx={{ width: "10.48375rem" }}
      >
        <img src={Illustration} alt="" />
      </AspectRatio>
      <Button startDecorator={<Icon />}>Book My Table Now</Button>
      <AspectRatio
        ratio="1.05"
        objectFit="contain"
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          bottom: 0,
        }}
      >
        <img src={Blob} alt="Blob Shape" />
      </AspectRatio>
    </Stack>
  );
};

export default CtaSection;
