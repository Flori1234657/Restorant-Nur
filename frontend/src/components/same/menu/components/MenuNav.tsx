import { Link, Stack } from "@mui/joy";
import { ReactSVG } from "react-svg";
import Wave from "../../../../assets/svg/waves/menu-nav-wave.svg";

const MenuNav = () => {
  return (
    <Stack>
      <Stack>
        <Link href="#">Fish</Link>
        <Link href="#">Pasta</Link>
        <Link href="#">Risotto</Link>
        <Link href="#">Soups</Link>
        <Link href="#">Salads</Link>
        <Link href="#">Drinks</Link>
        <Link href="#">Others</Link>
      </Stack>
      <ReactSVG src={Wave} />
    </Stack>
  );
};

export default MenuNav;
