import { Stack } from '@mui/joy';
import PagesHeaderTxt from '@/components/same/headers/PagesHeaderTxt';
import Content from '@/components/pages/wishlist/Content';

function Wishlist() {
  return (
    <Stack>
      <PagesHeaderTxt
        heading="View all the meals you have liked here!"
        subheading="In this section you can easily find you liked meals and book a table without thinking what to take!"
      />
      <Content />
    </Stack>
  );
}

export default Wishlist;
