import { AspectRatio, Stack, Typography } from '@mui/joy';
import { IoClose } from 'react-icons/io5';
import getImagePath from '@/utils/getImagePath';
import Button from '../../components/Button';
import ModalsWrapper from '../../../ModalsWrapper';

function Successfull() {
  const imagePath = getImagePath('svg/others/successfully-reserved-icon.svg');

  return (
    <ModalsWrapper>
      <>
        <Stack>
          <Typography>Your table was reserved successfully!</Typography>
          <Typography>
            You need to be in the restaurant 1hour before the reservation time
            has arrived! Otherwise we wont hold your table!
          </Typography>
        </Stack>
        <AspectRatio ratio="1">
          <img src={imagePath} alt="tick symbol" />
        </AspectRatio>
        <Button action={() => {}} innerTxt="Close" decorator={<IoClose />} />
      </>
    </ModalsWrapper>
  );
}

export default Successfull;
