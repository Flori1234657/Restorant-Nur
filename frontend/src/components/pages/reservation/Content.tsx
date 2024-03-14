import { Stack } from '@mui/joy';
import ReservationsList from './list/ReservationsList';
import ReservationForm from './form/ReservationForm';

function Content() {
  return (
    <Stack
      sx={{
        mx: { xs: '2rem', md: '8.44rem', lg: '9.35rem', xl: '9.773rem' },
        mt: { xs: '5rem' },
      }}
    >
      <ReservationsList />
      <ReservationForm />
    </Stack>
  );
}

export default Content;
