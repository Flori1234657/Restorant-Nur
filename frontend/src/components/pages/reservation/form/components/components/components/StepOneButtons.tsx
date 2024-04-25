import { MdDiscount as IconPromo } from 'react-icons/md';
import { GoArrowRight as RightArrow } from 'react-icons/go';
import { lazy } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from './components/Button';
import { useFormUiStore } from '../../../state/uiState';
import { ReservationForm } from '../../steps/interface/form';

const PromosModal = lazy(() => import('./components/PromosModal'));

function StepOneButtons() {
  const toggleFormStep = useFormUiStore((state) => state.toggleStep);
  const selectModalStore = useFormUiStore(
    (state) => state.reservationModals.selectDishes
  );

  const {
    formState: { isValid },
  } = useFormContext<ReservationForm>();

  return (
    <>
      <Button
        disabled={!isValid}
        action={() => {
          toggleFormStep('step2');
        }}
        decorator={<RightArrow />}
        innerText="Next"
      />
      <Button
        action={() => {
          selectModalStore.toggleOpen();
        }}
        decorator={<IconPromo />}
        innerText="Use A Promo"
      />

      {selectModalStore.isOpen && <PromosModal />}
    </>
  );
}

export default StepOneButtons;
