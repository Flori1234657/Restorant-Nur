import { Stack } from '@mui/joy';
import PagesHeaderTxt from '@/components/same/headers/PagesHeaderTxt';
import Content from '@/components/pages/promos/Content';

function Promos() {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <PagesHeaderTxt
        heading="Latest updates about our promotional's!"
        subheading="Are you unable to chose what to eat? Take a look here maybe you will find it!"
      />
      <Content />
    </Stack>
  );
}

export default Promos;
