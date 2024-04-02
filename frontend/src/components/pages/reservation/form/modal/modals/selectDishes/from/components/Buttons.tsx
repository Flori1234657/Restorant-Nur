import { Stack } from '@mui/joy';
import { GoArrowRight } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import Button from '../../../components/Button';

function Buttons() {
  return (
    <Stack>
      <Button
        action={() => {}}
        decorator={<GoArrowRight />}
        innerTxt="Continue"
      />
      <Button action={() => {}} decorator={<IoClose />} innerTxt="Cancel" />
    </Stack>
  );
}

export default Buttons;
