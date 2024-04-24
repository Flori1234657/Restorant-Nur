import { Modal, Stack, Typography } from '@mui/joy';
import React from 'react';
import Buttons from './components/Buttons';
import { useFormUiStore } from '../../../../state/uiState';

interface Props {
  selectDishFrom: React.ReactNode;
  isFromMenu?: boolean;
}

function SelectModal({ selectDishFrom, isFromMenu }: Props) {
  const store = useFormUiStore((state) => state.reservationModals.selectDishes);

  return (
    <Modal
      aria-labelledby="select dishes"
      open={store.isOpen}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Stack
        sx={(theme) => ({
          py: { xs: '1rem', md: '2rem' },
          bgcolor: {
            xs: theme.palette.secondary.black3,
            md: theme.palette.secondary[`${isFromMenu ? 'black3' : 'black2'}`],
          },
          gap: { md: '1rem' },
          borderRadius: { xs: '0.875rem' },
          boxShadow: theme.shadow.pcFoodCard,
        })}
        alignItems="center"
      >
        <Stack alignItems="center">
          <Typography
            sx={(theme) => ({
              fontSize: { xs: '1.125rem', md: '1rem' },
              fontWeight: '600',
              color: theme.palette.primary[500],
            })}
          >
            Tap to select
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: { xs: '0.75rem' },
              fontWeight: '500',
              lineHeight: '166%',
              color: theme.palette.primary[100],
            })}
          >
            1 selected
          </Typography>
        </Stack>
        {selectDishFrom}
        <Buttons />
      </Stack>
    </Modal>
  );
}

SelectModal.defaultProps = {
  isFromMenu: false,
};

export default SelectModal;
