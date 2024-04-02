import { Typography } from '@mui/joy';
import Buttons from './components/FailedButtons';

function Failed() {
  return (
    <>
      <Typography>
        Ops! Someone else has booked before you this table!
      </Typography>
      <Buttons />
    </>
  );
}

export default Failed;
