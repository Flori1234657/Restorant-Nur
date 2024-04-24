import { Stack } from '@mui/joy';
import { GoArrowRight } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import Button from '../../../components/Button';
import { useFormUiStore } from '@/components/pages/reservation/form/state/uiState';

function Buttons() {
  const closeSelectDishesModal = useFormUiStore(
    (state) => state.reservationModals.selectDishes.toggleOpen
  );

  return (
    <Stack
      sx={{
        gap: { xs: '0.5rem', md: '1rem' },
        px: { xs: '2rem', md: 'auto' },
        flexDirection: { md: 'row' },
      }}
    >
      <Button
        action={() => {}}
        decorator={<GoArrowRight />}
        innerTxt="Continue"
      />
      <Button
        action={() => closeSelectDishesModal()}
        decorator={<IoClose />}
        innerTxt="Cancel"
      />
    </Stack>
  );
}

export default Buttons;
