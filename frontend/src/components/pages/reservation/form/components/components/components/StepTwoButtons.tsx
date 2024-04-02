import { GoArrowLeft as LeftArrow } from 'react-icons/go';
import { GiNotebook as BookIcon } from 'react-icons/gi';
import Button from './components/Button';
import { useFormUiStore } from '../../../state/uiState';

function StepTwoButtons() {
  const toggleFormStep = useFormUiStore((state) => state.toggleStep);

  return (
    <>
      <Button action={() => {}} decorator={<BookIcon />} innerText="Book Now" />
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
