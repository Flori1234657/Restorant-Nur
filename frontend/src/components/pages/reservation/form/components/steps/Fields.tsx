import { Suspense, lazy } from 'react';
import { useFormUiStore } from '../../state/uiState';
import StepOne from './step1/StepOne';

const StepTwo = lazy(() => import('./step2/StepTwo'));

function Fields() {
  const formStep = useFormUiStore((state) => state.step);

  return formStep === 'step1' ? (
    <StepOne />
  ) : (
    <Suspense fallback="">
      <StepTwo />
    </Suspense>
  );
}

export default Fields;
