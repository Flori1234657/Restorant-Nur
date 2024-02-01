import { AspectRatio, Stack, Typography } from "@mui/joy";
import { ReviewsObj } from "./reviewsObj";
import PlaceholderImg from "../../../../../assets/webp/reviews/profile-placeholder.png";

const ReviewCard = (props: ReviewsObj) => {
  const ImgPath = import.meta.env.PROD
    ? `path after build`
    : `../../../../../assets/webp/reviews${props.profileImg}`;

  return (
    <Stack direction="row" gap="0.5rem" alignItems="center">
      <AspectRatio ratio="1/1" sx={{ width: "5rem", order: props.order && 2 }}>
        <img src={PlaceholderImg} alt="Client profile image" />
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
