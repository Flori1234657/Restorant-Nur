import { Stack, Typography } from '@mui/joy';
import { Suspense, lazy } from 'react';
import Inputs from './components/Inputs';
import { useFormUiStore } from '../../../state/uiState';

const TableMap = lazy(() => import('./components/TableMap'));

function StepOne() {
  const isTableMapOpen = useFormUiStore((state) => state.tableModal.isOpen);

  return (
    <Stack alignItems="flex-end">
      <Suspense fallback="">{isTableMapOpen && <TableMap />}</Suspense>

      <Typography
        level="body-lg"
        sx={(theme) => ({
          fontSize: {
            xs: '0.75rem',
            md: '0.625rem',
            lg: '0.6rem',
            xl: '0.569rem',
          },
          fontWeight: '500',
          lineHeight: '150%',
          color: theme.palette.primary[300],
        })}
      >
        STEP 1/2
      </Typography>
      <Inputs />
    </Stack>
  );
}

export default StepOne;
