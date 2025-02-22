import { AspectRatio, Button, Stack, Typography } from '@mui/joy';
import { GiNotebook as Icon } from 'react-icons/gi';
import Illustration from '@/assets/svg/illustrations/home-cta.svg';
import Blob from '@/assets/svg/blobs/cta-blob.svg';
import useSizeResponsive from '@/hooks/useSizeResponsive';

function CtaSection() {
  const { size } = useSizeResponsive(false);

  return (
    <Stack
      mx="2rem"
      sx={{
        mt: { xs: '6.25rem', md: '14.313rem', lg: '13.7rem', xl: '18.692rem' },
        mb: { xs: '4.25rem', md: '7.5rem' },
        gap: { xs: '1.25rem', lg: '1.2rem' },
      }}
      alignItems="center"
      position="relative"
    >
      <Stack alignItems="center">
        <Typography
          level="h1"
          textAlign="center"
          color="primary"
          sx={{
            fontSize: { xs: '1.875rem', md: '1.5rem', xl: '1.707rem' },
            lineHeight: { xs: '1.33', md: '1.5' },
          }}
        >
          So what are you waiting for?
        </Typography>
        <Typography
          level="h2"
          textAlign="center"
          fontWeight={400}
          sx={(theme) => ({
            color: theme.palette.primary[100],
            fontSize: {
              xs: '1rem',
              md: '0.875rem',
              lg: '0.8rem',
              xl: '0.731rem',
            },
            lineHeight: { md: '1.33' },
          })}
        >
          Book your table before someone else take’s it!
        </Typography>
      </Stack>
      <AspectRatio
        ratio="14/9"
        objectFit="contain"
        sx={{ width: { xs: '10.48375rem', md: '12.5rem' } }}
      >
        <img src={Illustration} alt="" />
      </AspectRatio>
      <Button size={size} startDecorator={<Icon />}>
        Book My Table Now
      </Button>
      <AspectRatio
        ratio="1.05"
        objectFit="contain"
        sx={{
          position: 'absolute',
          width: { xs: '100%', md: '14rem' },
          zIndex: -1,
          bottom: 0,
        }}
      >
        <img src={Blob} alt="Blob Shape" />
      </AspectRatio>
    </Stack>
  );
}

export default CtaSection;
