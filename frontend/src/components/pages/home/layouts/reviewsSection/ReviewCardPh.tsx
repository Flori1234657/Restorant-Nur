import { AspectRatio, Stack, Typography } from "@mui/joy";
import { ReviewsObj } from "./reviewsObj";
import { getImagePath } from "../../../../../utils/getImagePath";

const ReviewCard = (props: ReviewsObj) => {
  const imagePath = getImagePath(
    `webp/home/reviews/review-ph-${props.profileImg}.png`
  );

  return (
    <Stack direction="row" gap="0.5rem" alignItems="center">
      <AspectRatio ratio="1/1" sx={{ width: "5rem", order: props.order && 2 }}>
        <img src={imagePath} alt="Client profile image" loading="lazy" />
      </AspectRatio>
      <Typography
        level="body-md"
        fontSize="0.75rem"
        fontFamily="'La Belle Aurore', cursive"
        lineHeight="155%"
        width="10.5rem"
        sx={(theme) => ({ color: theme.palette.primary[100] })}
      >
        {props.review}
      </Typography>
    </Stack>
  );
};

export default ReviewCard;
