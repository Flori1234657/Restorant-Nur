import { Typography } from '@mui/joy';
import Buttons from './components/AskToConfirmButtons';

function AskToConfirm() {
  return (
    <>
      <Typography>
        You are booking now! <br /> Are you sure?
      </Typography>
      <Buttons />
      <Typography>Note this action cannot be undone!</Typography>
    </>
  );
}

export default AskToConfirm;
