import { Stack } from '@mui/joy';
import { Suspense, lazy } from 'react';
import Dishes from './components/Dishes';
import Label from './components/Label';

const SelectDishesModal = lazy(
  () => import('../../../../modal/modals/selectDishes/SelectDishes')
);

function SelectDishes() {
  // const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <Stack sx={{ gap: { xs: '0.75rem' } }}>
      <Label />
      <Dishes />
      <Suspense fallback="">
        <SelectDishesModal />
      </Suspense>
    </Stack>
  );
}

export default SelectDishes;
