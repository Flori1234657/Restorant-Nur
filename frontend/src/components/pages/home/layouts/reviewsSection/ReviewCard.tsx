import { AspectRatio, Avatar, Stack, Typography } from "@mui/joy";
import { ReviewsObj } from "./reviewsObj";

const ReviewCard = (props: ReviewsObj) => {
  const ImgPath = import.meta.env.PROD
    ? `path after build`
    : `../../../../../assets/webp/reviews${props.profileImg}`;

  return (
    <Stack>
      <AspectRatio>
        <Avatar alt="Client profile image" src={ImgPath} />
      </AspectRatio>
      <Typography level="body-md">{props.review}</Typography>
    </Stack>
  );
};

export default ReviewCard;
