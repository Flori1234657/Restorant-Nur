import { AspectRatio, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import ReviewCard from "./ReviewCard";
import { arrOfreviwes } from "./reviewsObj";
import Blob from "../../../../../assets/svg/blobs/reviews-blob.svg";

const Reviews = () => {
  return (
    <Stack mt="4.25rem" position="relative" alignItems="center">
      <Stack mx="2rem">
        <SectionHeaders
          heading="Reviews"
          subheading="What our clients say about us?"
        />
        <Stack gap="0.5rem">
          {arrOfreviwes.map((el) => (
            <ReviewCard
              key={el.profileImg}
              profileImg={el.profileImg}
              review={el.review}
              order={el.order}
            />
          ))}
        </Stack>
      </Stack>
      <AspectRatio
        ratio="0.96"
        sx={{ width: "23.0625rem", position: "absolute", zIndex: -1 }}
      >
        <img src={Blob} alt="Blob shape" />
      </AspectRatio>
    </Stack>
  );
};

export default Reviews;
