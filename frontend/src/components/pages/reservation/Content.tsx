import { Stack } from '@mui/joy';
import ReservationsList from './list/ReservationsList';
import ReservationForm from './form/ReservationForm';
import Blob from './components/Blob';

function Content() {
  return (
    <Stack
      sx={{
        mx: { xs: '2rem', md: '8.44rem', lg: '9.35rem', xl: '9.773rem' },
        mt: { xs: '5rem' },
        pb: '7rem',
        pt: { xs: '2rem' },
        gap: { xs: '1.75rem', md: '3rem' },
        flexDirection: { md: 'row' },
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <Blob />
      <ReservationsList />
      <ReservationForm />
    </Stack>
  );
}

export default Content;
