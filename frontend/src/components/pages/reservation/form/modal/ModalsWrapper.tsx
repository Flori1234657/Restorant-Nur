import { IconButton, Modal, Stack } from '@mui/joy';
import React, { JSXElementConstructor } from 'react';
import { IoClose } from 'react-icons/io5';
import { useFormUiStore } from '../state/uiState';

interface Props {
  children: React.ReactElement<any, string | JSXElementConstructor<any>>;
}

function ModalsWrapper({ children }: Props) {
  const store = useFormUiStore(
    (state) => state.reservationModals.modalsWrapper
  );

  return (
    <Modal
      aria-labelledby="reservation form modals wrapper"
      open={store.isOpen}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Stack
        sx={(theme) => ({
          pb: { xs: '1rem', md: '2rem' },
          pt: { xs: '2rem' },
          bgcolor: {
            xs: theme.palette.secondary.black3,
            md: theme.palette.secondary.black2,
          },
          gap: { xs: '1.5rem', md: '1rem' },
          borderRadius: { xs: '0.875rem' },
          boxShadow: theme.shadow.pcFoodCard,
          position: 'relative',
        })}
        alignItems="center"
      >
        {children}
        <IconButton
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          size="sm"
          variant="solid"
          color="primary"
          onClick={() => store.toggleOpen()}
        >
          <IoClose />
        </IconButton>
      </Stack>
    </Modal>
  );
}

export default ModalsWrapper;
