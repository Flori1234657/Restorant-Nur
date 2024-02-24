import { Stack, Typography } from '@mui/joy';
import ReservationItem from './components/ReservationItem';

function ReservationsList() {
  return (
    <Stack>
      <Stack>
        <Typography>Reservations</Typography>
        <Typography>Click on card to view more</Typography>
      </Stack>
      {[1, 2, 3].map((el) => (
        <ReservationItem key={el} />
      ))}
    </Stack>
  );
}

export default ReservationsList;
