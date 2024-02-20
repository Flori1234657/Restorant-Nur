import MenuCard from "../components/same/menu/MenuCard.tsx";
import PagesHeaderTxt from "../components/same/headers/PagesHeaderTxt.tsx";
import Stack from "@mui/joy/Stack";
//import Blob from "../assets/svg/blobs/menu-blob.svg";

const Menu = () => {
  return (
    <Stack>
      <PagesHeaderTxt
        heading="Find what you can eat in our digital menu!"
        subheading="We have made easy for you to decide, this digital menu is easier then the real one."
      />
      <MenuCard />
    </Stack>
  );
};

export default Menu;
