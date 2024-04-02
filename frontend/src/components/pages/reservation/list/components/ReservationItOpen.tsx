import { IconButton, Stack, Typography } from '@mui/joy';
import { IoIosArrowUp as ArrIcon } from 'react-icons/io';
import BookDetails from '../../form/components/steps/bookDetails/BookDetails';

function ReservationItOpen({
  setCardOpen,
}: {
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Stack sx={{ p: { xs: '0.5rem' }, px: { md: 0 }, gap: '0.5rem' }}>
      <Stack>
        <Typography
          sx={(theme) => ({
            fontSize: {
              xs: '1rem',
              md: '0.875rem',
              lg: '0.8rem',
              xl: '0.731rem',
            },
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
        size="sm"
      >
        <ArrIcon />
      </IconButton>
    </Stack>
  );
}

export default ReservationItOpen;
