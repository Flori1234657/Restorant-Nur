import { AspectRatio, Stack, Typography } from '@mui/joy';
import { ReviewsObj } from './reviewsObj';
import getImagePath from '@/utils/getImagePath';

function ReviewCard({ profileImg, review, order }: ReviewsObj) {
  const imagePath = getImagePath(
    `webp/home/reviews/review-ph-${profileImg}.webp`
  );

  return (
    <Stack direction="row" gap="0.5rem" alignItems="center">
      <AspectRatio ratio="1/1" sx={{ width: '5rem', order: order && 2 }}>
        <img src={imagePath} alt="Client profile" loading="lazy" />
      </AspectRatio>
      <Typography
        level="body-md"
        fontSize="0.75rem"
        fontFamily="'La Belle Aurore', cursive"
        lineHeight="155%"
        width="10.5rem"
        sx={(theme) => ({ color: theme.palette.primary[100] })}
      >
        {review}
      </Typography>
    </Stack>
  );
}

export default ReviewCard;
