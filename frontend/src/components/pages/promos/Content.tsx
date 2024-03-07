import { AspectRatio, Stack } from '@mui/joy';
import CategoryMap from './components/CategoryMap';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import getImagePath from '@/utils/getImagePath';

function Content() {
  const { vw } = useViewPortWidth();
  const imagePath = getImagePath(
    vw < 900 ? `svg/waves/wishlist-wave-ph.svg` : `svg/waves/promo-wave.svg`
  );

  return (
    <Stack
      sx={{
        mt: { xs: '3.5rem' },
        position: 'relative',
      }}
    >
      <AspectRatio ratio={vw < 900 ? '2.91' : '7.62'}>
        <img src={imagePath} alt="Wave shape" />
      </AspectRatio>
      <CategoryMap />
    </Stack>
  );
}

export default Content;
