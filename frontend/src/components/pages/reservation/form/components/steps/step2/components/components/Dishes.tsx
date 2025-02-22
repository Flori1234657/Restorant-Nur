import { Grid, IconButton } from '@mui/joy';
import { FaPlus } from 'react-icons/fa6';
import DishesMap from './components/DishesMap';
import { useFormUiStore } from '@/components/pages/reservation/form/state/uiState';

function Dishes() {
  const selectDishesModal = useFormUiStore(
    (state) => state.reservationModals.modalsWrapper
  );

  return (
    <Grid container columns={4} gap="0.75rem">
      <Grid xs={1} width="auto">
        <IconButton
          variant="outlined"
          color="primary"
          onClick={() => selectDishesModal.toggleOpen()}
          sx={{
            width: { xs: '3rem', md: '2.5rem' },
            height: { xs: '3rem', md: '2.5rem' },
            borderStyle: 'dashed',
            borderRadius: '0.5rem',
          }}
        >
          <FaPlus />
        </IconButton>
      </Grid>
      <DishesMap />
    </Grid>
  );
}

export default Dishes;
