import { MdDelete } from 'react-icons/md';
import { Suspense, lazy } from 'react';
import useViewPortWidth from '@/hooks/useViewPortWidth';

const Button = lazy(() => import('@mui/joy/Button'));
const IconButton = lazy(() => import('@mui/joy/IconButton'));

function ClearButton() {
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback="">
      {vw > 899 ? (
        <Button size="xs" startDecorator={<MdDelete />}>
          Clear All
        </Button>
      ) : (
        <IconButton aria-label="Clear all" variant="solid" color="primary">
          <MdDelete />
        </IconButton>
      )}
    </Suspense>
  );
}

export default ClearButton;
