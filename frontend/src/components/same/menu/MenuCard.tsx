import { Stack } from "@mui/joy";
import MenuNav from "./components/MenuNav.tsx";
import Content from "./components/Content.tsx";

const MenuCard = () => {
  return (
    <Stack>
      <MenuNav />
      <Content />
    </Stack>
  );
};

export default MenuCard;
