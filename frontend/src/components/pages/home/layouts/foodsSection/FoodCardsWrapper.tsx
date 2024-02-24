import { Stack } from '@mui/joy';
import { Suspense, lazy } from 'react';
import FoodCardsMap from './FoodCardsMap';
import useViewPortWidth from '@/hooks/useViewPortWidth';

const Decoration = lazy(() => import('./MobileDecoration'));

function FoodCardsWrapper() {
  const { vw } = useViewPortWidth();
  return (
    <Stack
      sx={{
        pt: { xs: '3rem', xl: 0 },
        pb: { xs: '1.57rem', xl: 0 },
      }}
      position="relative"
      alignItems="center"
    >
      <FoodCardsMap />
      {vw < 1536 ? (
        <Suspense fallback="">
          <Decoration />
        </Suspense>
      ) : (
        ''
      )}
    </Stack>
  );
}

export default FoodCardsWrapper;
