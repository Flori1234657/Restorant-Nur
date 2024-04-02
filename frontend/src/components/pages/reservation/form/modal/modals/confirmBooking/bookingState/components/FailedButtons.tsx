import { Stack } from '@mui/joy';
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import Button from '../../../components/Button';

function FailedButtons() {
  return (
    <Stack>
      <Button
        action={() => {}}
        innerTxt="Chose Another Table?"
        decorator={<IoMdThumbsUp />}
      />
      <Button
        action={() => {}}
        innerTxt="No Thanks I'm Going!"
        decorator={<IoMdThumbsDown />}
      />
    </Stack>
  );
}

export default FailedButtons;
