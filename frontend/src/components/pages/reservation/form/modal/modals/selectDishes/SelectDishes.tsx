import { IconButton, Stack, Typography } from '@mui/joy';
import { IoClose } from 'react-icons/io5';
import Buttons from './components/Buttons';
// import SelectModal from './from/SelectModal';

function SelectDishes() {
  return (
    <Stack>
      <Typography>Select dishes</Typography>
      <Buttons />
      <IconButton>
        <IoClose />
      </IconButton>

      {/* <SelectModal selectDishFrom={zustandState} /> */}
    </Stack>
  );
}

export default SelectDishes;
