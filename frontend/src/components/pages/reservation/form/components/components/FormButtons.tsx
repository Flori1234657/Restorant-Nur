import { Stack } from '@mui/joy';
import {
  GoArrowRight as RightArrow,
  GoArrowLeft as LeftArrow,
} from 'react-icons/go';
import { MdDiscount as IconPromo } from 'react-icons/md';
import { GiNotebook as BookIcon } from 'react-icons/gi';
import { useFormUiStore } from '../../state/uiState';
import Button from './components/Button';

function FormButtons() {
  const toggleFormStep = useFormUiStore((state) => state.toggleStep);
  const formStep = useFormUiStore((state) => state.step);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ gap: '1.5rem' }}
    >
      {formStep === 'step1' ? (
        <>
          <Button
            action={() => {
              toggleFormStep('step2');
            }}
            decorator={<RightArrow />}
            innerText="Next"
          />
          <Button
            action={() => {}}
            decorator={<IconPromo />}
            innerText="Use A Promo"
          />
        </>
      ) : (
        <>
          <Button
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
        </>
      )}
    </Stack>
  );
}

export default FormButtons;
