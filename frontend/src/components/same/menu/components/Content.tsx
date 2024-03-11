import { AspectRatio, Stack } from '@mui/joy';
import CardsWrapper from './components/CardsWrapper';
import getImagePath from '@/utils/getImagePath';

function Content() {
  const image = getImagePath('webp/cards/food-placeholder.jpg');

  return (
    <Stack sx={{ width: { xs: '14.5rem' }, gap: { xs: '1rem' } }}>
      <AspectRatio
        ratio="1.66"
        sx={{ width: { xs: '100%' }, borderRadius: '0.75rem', mt: '0.5rem' }}
      >
        <img src={image} alt="Food" />
      </AspectRatio>
      <CardsWrapper />
    </Stack>
  );
}

export default Content;
