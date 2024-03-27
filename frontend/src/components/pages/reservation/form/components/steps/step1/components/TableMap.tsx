import { Modal, Stack, Typography } from '@mui/joy';
import TableMapImage from './components/TableMapImage';
import TableMapActions from './components/TableMapActions';
import { useFormUiStore } from '../../../../state/uiState';

function TableMap() {
  const isTableMapOpen = useFormUiStore((state) => state.tableModal.isOpen);

  return (
    <Modal
      open={isTableMapOpen}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        sx={(theme) => ({
          width: { xs: '100%', md: 'auto' },
          px: { xs: '0.75rem', md: '2rem' },
          mx: { xs: '2rem', md: '8.44rem', lg: '9.35rem', xl: '9.773rem' },
          bgcolor: theme.palette.secondary.black1,
          borderRadius: { xs: '0.75rem' },
        })}
        alignItems="center"
      >
        <Typography
          sx={(theme) => ({
            fontSize: {
              xs: '1.25rem',
              md: '1.125rem',
              lg: '1rem',
              xl: '0.975rem',
            },
            fontWeight: '600',
            lineHeight: '155%',
            color: theme.palette.primary[500],
            py: '1rem',
          })}
        >
          Restaurant map
        </Typography>
        <TableMapImage />
        <TableMapActions />
      </Stack>
    </Modal>
  );
}

export default TableMap;
