import Stack from '@mui/joy/Stack';
import MenuCard from '@/components/same/menu/MenuCard';
import PagesHeaderTxt from '@/components/same/headers/PagesHeaderTxt';
// import Blob from "../assets/svg/blobs/menu-blob.svg";

function Menu() {
  return (
    <Stack sx={{ pb: '7rem' }}>
      <PagesHeaderTxt
        heading="Find what you can eat in our digital menu!"
        subheading="We have made easy for you to decide, this digital menu is easier then the real one."
      />
      <MenuCard />
    </Stack>
  );
}

export default Menu;
