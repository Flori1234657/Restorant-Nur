import { IconButton, Stack, Typography } from '@mui/joy';
import { IoIosArrowUp as ArrIcon } from 'react-icons/io';
import BookDetails from '../../form/steps/bookDetails/BookDetails';

function ReservationItOpen({
  setCardOpen,
}: {
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Stack sx={{ p: { xs: '0.5rem' }, gap: '0.5rem' }}>
      <Stack>
        <Typography
          sx={(theme) => ({
            fontSize: { xs: '1rem' },
            color: theme.palette.primary[300],
          })}
        >
          Details
        </Typography>
        <BookDetails />
      </Stack>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          setCardOpen(false);
        }}
        color="primary"
        variant="solid"
      >
        <ArrIcon />
      </IconButton>
    </Stack>
  );
}

export default ReservationItOpen;
