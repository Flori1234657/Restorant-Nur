import { Stack } from '@mui/joy';
import ScrollShadow from '@/components/same/shadow/ScrollShadow';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import CardsMap from './components/CardsMap';

function FromWishlist() {
  const { vw } = useViewPortWidth();

  return (
    <Stack
      sx={{
        maxHeight: { xs: '18.75rem', md: 'auto' },
        maxWidth: { md: '31.055rem' },
        px: { xs: '0.75rem' },
        overflow: 'hidden',
        flexDirection: { md: 'row' },
      }}
    >
      <ScrollShadow
        className={`${vw < 900 ? '--menu-component' : '--promo'} --select-modal`}
        direction={vw < 900 ? 'Vertical' : 'Horizontal'}
      >
        <Stack
          sx={{
            overflowX: 'scroll',
          }}
        >
          <Stack
            alignItems="center"
            sx={{
              gap: { xs: '0.5rem', md: '1rem' },
              py: { xs: '1rem' },
              px: { md: '2rem' },
              flexDirection: { md: 'row' },
            }}
          >
            <CardsMap />
          </Stack>
        </Stack>
      </ScrollShadow>
    </Stack>
  );
}

export default FromWishlist;
