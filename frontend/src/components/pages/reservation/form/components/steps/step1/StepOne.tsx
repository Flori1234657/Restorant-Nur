import { Stack } from '@mui/joy';
import { Suspense, lazy } from 'react';
import Inputs from './components/Inputs';
import { useFormUiStore } from '../../../state/uiState';
import StepIndicator from '../components/StepIndicator';

const TableMap = lazy(() => import('./components/TableMap'));

function StepOne() {
  const isTableMapOpen = useFormUiStore((state) => state.tableModal.isOpen);

  return (
    <Stack>
      <Suspense fallback="">{isTableMapOpen && <TableMap />}</Suspense>
      <StepIndicator stepText="STEP 1/2" />
      <Inputs />
    </Stack>
  );
}

export default StepOne;
