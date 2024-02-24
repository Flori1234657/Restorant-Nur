import { Stack } from '@mui/joy';
import ActionsPanel from './components/ActionsPanel';
import Wave from '@/assets/svg/waves/wishlist-wave.svg';
import ContentWrapper from './components/ContentWrapper';

function Content() {
  return (
    <Stack>
      <ActionsPanel />
      <img src={Wave} alt="" />
      <ContentWrapper />
    </Stack>
  );
}

export default Content;
