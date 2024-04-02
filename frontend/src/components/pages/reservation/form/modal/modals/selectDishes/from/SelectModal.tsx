import { Modal, Stack, Typography } from '@mui/joy';
import React from 'react';
import Buttons from '../components/Buttons';

interface Props {
  selectDishFrom: React.ReactNode;
}

function SelectModal({ selectDishFrom }: Props) {
  return (
    <Modal
      aria-labelledby="select dishes"
      open={false}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Stack>
        <Stack>
          <Typography>Tap to select</Typography>
          <Typography>1 selected</Typography>
        </Stack>
        {selectDishFrom}
        <Buttons />
      </Stack>
    </Modal>
  );
}

export default SelectModal;
