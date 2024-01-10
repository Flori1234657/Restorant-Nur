import { IconButton, Stack } from "@mui/joy";
import { TiHome as IconHome } from "react-icons/ti";
import {
  MdDiscount as IconPromo,
  MdRestaurantMenu as IconMenu,
} from "react-icons/md";
import { IoHeart as IconWish } from "react-icons/io5";
import { GiNotebook as IconBook } from "react-icons/gi";

const PhoneNav = () => {
  return (
    <nav style={{ width: "100%", position: "fixed", bottom: 0, zIndex: "100" }}>
      <Stack>
        <IconButton href="/wishlist" aria-label="Wishlist page link">
          <IconWish />
        </IconButton>
        <IconButton href="/promos" aria-label="Promos page link">
          <IconPromo />
        </IconButton>
        <IconButton href="/" aria-label="Home page link">
          <IconHome />
        </IconButton>
        <IconButton href="/menu" aria-label="Menu page link">
          <IconMenu />
        </IconButton>
        <IconButton href="/reservation" aria-label="Reservation page link">
          <IconBook />
        </IconButton>
      </Stack>
    </nav>
  );
};

export default PhoneNav;
