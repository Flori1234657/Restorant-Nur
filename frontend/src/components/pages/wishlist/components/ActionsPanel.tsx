import { AspectRatio, Input, Stack } from '@mui/joy';
import { IoSearch } from 'react-icons/io5';
import Filter from './Filter';
import ClearButton from './ClearButton';
import getImagePath from '@/utils/getImagePath';
import useViewPortWidth from '@/hooks/useViewPortWidth';

function ActionsPanel() {
  const { vw } = useViewPortWidth();
  const imagePath = getImagePath(
    vw < 900 ? `svg/waves/wishlist-wave-ph.svg` : `svg/waves/wishlist-wave.svg`
  );

  return (
    <Stack
      sx={{
        position: 'relative',
      }}
    >
      <AspectRatio ratio="2.91">
        <img src={imagePath} alt="Wave shape" />
      </AspectRatio>
      <Stack
        sx={{
          width: '100%',
          position: 'absolute',
          zIndex: 1,
          top: '2.5rem',
          justifyContent: 'space-between',
          px: '2rem',
        }}
        direction="row"
      >
        <Stack
          direction="row"
          sx={{
            gap: { xs: '1rem' },
          }}
        >
          <Filter />
          <Input
            startDecorator={<IoSearch />}
            placeholder="Search"
            sx={{
              width: { xs: '6.5rem' },
            }}
          />
        </Stack>
        <ClearButton />
      </Stack>
    </Stack>
  );
}

export default ActionsPanel;
