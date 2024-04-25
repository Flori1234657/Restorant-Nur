import { GoArrowLeft as LeftArrow } from 'react-icons/go';
import { GiNotebook as BookIcon } from 'react-icons/gi';
import { useFormContext } from 'react-hook-form';
import Button from './components/Button';
import { useFormUiStore } from '../../../state/uiState';
import { ReservationForm } from '../../steps/interface/form';

function StepTwoButtons() {
  const toggleFormStep = useFormUiStore((state) => state.toggleStep);

  const {
    formState: { isValid },
  } = useFormContext<ReservationForm>();

  return (
    <>
      <Button
        disabled={!isValid}
        type="submit"
        action={() => {}}
        decorator={<BookIcon />}
        innerText="Book Now"
      />
      <Button
        action={() => {
          toggleFormStep('step1');
        }}
        decorator={<LeftArrow />}
        innerText="Back"
      />
      {/* {zustandState && <BookModal />} */}
    </>
  );
}

export default StepTwoButtons;
