import { Suspense, lazy, useRef } from 'react';
import { Stack } from '@mui/joy';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import SectionHeaders from '../../SectionHeaders';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import Fallback from '@/components/same/loading/Fallback';

const ImagesPhWrapper = lazy(() => import('./ImagesPhWrapper'));
const ImagesPcWrapper = lazy(() => import('./ImagesPcWrapper'));

function Content() {
  const element = useRef<HTMLDivElement | null>(null);
  const { isIntersecting } = useIntersectionObserver({ element });

  const { vw } = useViewPortWidth();

  return (
    <Stack sx={{ mx: '2rem' }} pt="1rem" alignItems="center">
      <SectionHeaders
        heading="Gallery"
        subheading="Some images of our seafood restaurant."
      />
      <div ref={element} aria-label="Wrapper div">
        {isIntersecting && (
          <Suspense
            fallback={
              <Fallback
                height="16.647rem"
                heightMd="10.609rem"
                heightLg="13.387rem"
              />
            }
          >
            {vw < 900 ? <ImagesPhWrapper /> : <ImagesPcWrapper />}
          </Suspense>
        )}
      </div>
    </Stack>
  );
}

export default Content;
