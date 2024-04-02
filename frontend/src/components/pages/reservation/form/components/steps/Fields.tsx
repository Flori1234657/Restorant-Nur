import { Suspense, lazy } from 'react';
import { useFormUiStore } from '../../state/uiState';
import StepOne from './step1/StepOne';
import Fallback from '@/components/same/loading/Fallback';

const StepTwo = lazy(() => import('./step2/StepTwo'));

function Fields() {
  const formStep = useFormUiStore((state) => state.step);

  return formStep === 'step2' ? (
    <Suspense fallback={<Fallback height="37.662rem" />}>
      <StepTwo />
    </Suspense>
  ) : (
    <StepOne />
  );
}

export default Fields;
