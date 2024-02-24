import { Stack } from '@mui/joy';
import MenuNav from './components/MenuNav';
import Content from './components/Content';

function MenuCard() {
  return (
    <Stack>
      <MenuNav />
      <Content />
    </Stack>
  );
}

export default MenuCard;
