import { AspectRatio, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import ReviewCardsMap from "./ReviewCardsMap";
import Blob from "../../../../../assets/svg/blobs/reviews-blob.svg";

const Reviews = () => {
  return (
    <Stack
      sx={{
        mt: { xs: "4.25rem", md: "8.563rem", lg: "13.7rem", xl: "18.692rem" },
      }}
      position="relative"
      alignItems="center"
    >
      <Stack
        sx={{
          mx: { xs: "2rem", md: "8.44rem", lg: "9.35rem", xl: "9.773rem" },
        }}
      >
        <SectionHeaders
          heading="Reviews"
          subheading="What our clients say about us?"
        />
        <ReviewCardsMap />
      </Stack>
      <AspectRatio
        ratio="0.96"
        sx={{
          width: { xs: "23.0625rem", md: "18rem" },
          position: "absolute",
          zIndex: -1,
        }}
      >
        <img src={Blob} alt="Blob shape" />
      </AspectRatio>
    </Stack>
  );
};

export default Reviews;
