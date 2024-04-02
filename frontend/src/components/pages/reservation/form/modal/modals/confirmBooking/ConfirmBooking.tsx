import { Stack } from '@mui/joy';
import AskToConfirm from './bookingState/AskToConfirm';

function ConfirmBooking() {
  return (
    <Stack>
      {/** Toggle the booking state using zustand */}
      <AskToConfirm />
    </Stack>
  );
}

export default ConfirmBooking;
