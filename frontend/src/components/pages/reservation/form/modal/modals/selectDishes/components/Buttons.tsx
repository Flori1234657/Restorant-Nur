import { Stack } from '@mui/joy';
import { IoHeart } from 'react-icons/io5';
import { GiNotebook } from 'react-icons/gi';
import Button from '../../components/Button';

function Buttons() {
  return (
    <Stack>
      <Button
        action={() => {}}
        innerTxt="From Wishlist"
        decorator={<IoHeart />}
      />
      <Button
        action={() => {}}
        innerTxt="From Menu"
        decorator={<GiNotebook />}
      />
    </Stack>
  );
}

export default Buttons;
