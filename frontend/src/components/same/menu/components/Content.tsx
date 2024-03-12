import { AspectRatio, Stack } from '@mui/joy';
import CardsWrapper from './components/CardsWrapper';
import getImagePath from '@/utils/getImagePath';
import useViewPortWidth from '@/hooks/useViewPortWidth';

function Content() {
  const { vw } = useViewPortWidth();
  const image = getImagePath('webp/cards/food-placeholder.jpg');

  return (
    <Stack
      sx={{
        width: { xs: '14.5rem', md: '100%' },
        gap: { xs: '1rem' },
        flexDirection: { md: 'row' },
      }}
    >
      <AspectRatio
        ratio={vw < 900 ? '1.66' : '1'}
        sx={{
          width: { xs: '100%', md: '12.5rem' },
          borderRadius: '0.75rem',
          borderTopRightRadius: { md: 0 },
          borderTopLeftRadius: { md: 0 },
          mt: { xs: '0.5rem', md: 0 },
        }}
      >
        <img src={image} alt="Food" />
      </AspectRatio>
      <CardsWrapper />
    </Stack>
  );
}

export default Content;
