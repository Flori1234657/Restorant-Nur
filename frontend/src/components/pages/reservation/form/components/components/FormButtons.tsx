import { Stack } from '@mui/joy';
import { Suspense, lazy } from 'react';
import { useFormUiStore } from '../../state/uiState';

const StepOneButtons = lazy(() => import('./components/StepOneButtons'));
const StepTwoButtons = lazy(() => import('./components/StepTwoButtons'));

function FormButtons() {
  const formStep = useFormUiStore((state) => state.step);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ gap: '1.5rem' }}
    >
      <Suspense fallback="">
        {formStep === 'step1' ? <StepOneButtons /> : <StepTwoButtons />}
      </Suspense>
    </Stack>
  );
}

export default FormButtons;
