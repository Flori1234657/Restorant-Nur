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
      <AspectRatio ratio={vw < 900 ? '2.91' : '7.62'}>
        <img src={imagePath} alt="Wave shape" />
      </AspectRatio>
      <Stack
        sx={{
          width: '100%',
          position: 'absolute',
          zIndex: 1,
          top: { xs: '2.5rem', md: '4rem' },
          justifyContent: 'space-between',
          px: { xs: '2rem', md: '8.44rem', lg: '9.35rem', xl: '9.773rem' },
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
            size="xs"
            sx={{
              width: { xs: '6.5rem', md: '7rem' },
            }}
          />
        </Stack>
        <ClearButton />
      </Stack>
    </Stack>
  );
}

export default ActionsPanel;
