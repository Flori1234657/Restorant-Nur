import { Stack, Typography, Button } from '@mui/joy';
import { MdRestaurantMenu as Icon } from 'react-icons/md';
import { Suspense, lazy } from 'react';
import SectionHeaders from '../../SectionHeaders';
import useSizeResponsive from '@/hooks/useSizeResponsive';
import useViewPortWidth from '@/hooks/useViewPortWidth';

const PcBlob = lazy(() => import('./PcBlob'));

function AboutUs() {
  const { size } = useSizeResponsive(false);
  const { vw } = useViewPortWidth();

  return (
    <Stack
      sx={{
        position: 'relative',
        mx: '2rem',
        mt: { md: '3rem', lg: '6rem' },
      }}
      alignItems="center"
    >
      <SectionHeaders
        heading="About us"
        subheading="Why come to our fish restaurant?"
      />
      <Stack
        alignItems="center"
        sx={{
          maxWidth: { md: '25.875rem', lg: '27.2rem', xl: '28.282rem' },
          gap: { xs: '1rem', lg: '0.2rem', xl: '0.65rem' },
        }}
      >
        <Typography
          textAlign="center"
          lineHeight="155%"
          fontFamily="'La Belle Aurore', cursive"
          sx={(theme) => ({
            color: theme.palette.primary[100],
            fontSize: {
              xs: '0.75rem',
              md: '1rem',
              lg: '0.9rem',
              xl: '0.975rem',
            },
          })}
        >
          If you are on vacation in Ksamil and are thinking for a fish
          restaurant to enjoy your meal, then come to our restaurant in Ksamil
          and enjoy an unforgettable experience! Also if you want an halal
          restaurant we are 100% halal! Your food in this restaurant is prepared
          from some of the best chefs! Also we have made it simple for you being
          the 1st restaurant in Ksamil to offer online table reservation! You
          need to try our food to believe us!
        </Typography>
        <Button size={size} startDecorator={<Icon />}>
          Our Menu
        </Button>
      </Stack>
      {vw > 899 ? (
        <Suspense fallback="">
          <PcBlob />
        </Suspense>
      ) : (
        ''
      )}
    </Stack>
  );
}

export default AboutUs;
