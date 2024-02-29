import { Stack, Typography } from '@mui/joy';
import { Suspense, lazy, useRef } from 'react';
import { footerHeadingStyles } from './sxObjs/textInfo';
import Fallback from '../../loading/Fallback';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Map = lazy(() => import('./map/Map'));

function MapLocation() {
  const element = useRef<HTMLDivElement | null>(null);

  const { isIntersecting } = useIntersectionObserver({ element });

  return (
    <Stack gap="0.5rem">
      <Typography level="h2" sx={(theme) => footerHeadingStyles(theme)}>
        Find us on map
      </Typography>
      <div ref={element}>
        {' '}
        <Suspense fallback={<Fallback height="8rem" />}>
          {isIntersecting && <Map />}
        </Suspense>
      </div>
    </Stack>
  );
}

export default MapLocation;
