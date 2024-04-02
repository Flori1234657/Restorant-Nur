import { Stack } from '@mui/joy';
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import Button from '../../../components/Button';

function AskToConfirmButtons() {
  return (
    <Stack>
      <Button
        action={() => {}}
        innerTxt="Yes, Im Sure"
        decorator={<IoMdThumbsUp />}
      />
      <Button
        action={() => {}}
        innerTxt="No I Need To Think"
        decorator={<IoMdThumbsDown />}
      />
    </Stack>
  );
}

export default AskToConfirmButtons;
