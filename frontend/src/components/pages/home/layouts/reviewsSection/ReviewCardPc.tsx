import { AspectRatio, Stack, Typography } from '@mui/joy';
import { ReviewsObj } from './reviewsObj';
import getImagePath from '@/utils/getImagePath';

type Props = {
  reviewObj: ReviewsObj;
  fontS: string;
};

function ReviewCardPc({ fontS, reviewObj }: Props) {
  const imagePath = getImagePath(
    `webp/home/reviews/review-pc-${reviewObj.profileImg}.webp`
  );

  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.palette.primary[100],
        borderRadius: '0.5rem',
        alignItems: 'center',
        position: 'relative',
        fontSize: fontS,
        maxWidth: { md: '12em', lg: '13.767em' },
        mt: '1.5em',
        height: '0',
      })}
    >
      <AspectRatio
        ratio="1/1"
        sx={(theme) => ({
          width: { md: '3.264em', lg: '3.424em', xl: '3.558rem' },
          borderRadius: '50%',
          border: `0.30em solid ${theme.palette.primary[100]}`,
          position: 'absolute',
          top: { md: '-1.632em', lg: '-1.712em', xl: '-1.779em' },
        })}
      >
        <img src={imagePath} alt="Client profile" loading="lazy" />
      </AspectRatio>
      <Typography
        sx={(theme) => ({
          color: theme.palette.primary[900],
          fontFamily: "'La Belle Aurore', cursive",
          fontSize: { md: '0.75em' },
          px: { md: '1.098em', lg: '1.151em', xl: '2em' },
          py: { md: '1.885em', lg: '2.4em' },
          textAlign: 'center',
        })}
      >
        {reviewObj.review}
      </Typography>
    </Stack>
  );
}

export default ReviewCardPc;
