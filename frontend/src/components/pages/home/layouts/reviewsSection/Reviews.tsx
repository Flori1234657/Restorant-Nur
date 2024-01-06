import { Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import ReviewCard from "./ReviewCard";
import { arrOfreviwes } from "./reviewsObj";
import { ReactSVG } from "react-svg";
import Blob from "../../../../../assets/svg/blobs/reviews-blob.svg";

const Reviews = () => {
  return (
    <Stack>
      <SectionHeaders
        heading="Reviews"
        subheading="What our clients say about us?"
      />
      <Stack>
        {arrOfreviwes.map((el) => (
          <ReviewCard
            key={el.profileImg}
            profileImg={el.profileImg}
            review={el.review}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Reviews;
