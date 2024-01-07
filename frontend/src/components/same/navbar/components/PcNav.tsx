import { AspectRatio, Button, Link, Stack, Typography } from "@mui/joy";
import Logo from "../../../../assets/logo.svg";
import { FaPhone } from "react-icons/fa6";

const PcNav = () => {
  return (
    <header>
      <Stack>
        <Stack>
          <AspectRatio objectFit="contain">
            <img src={Logo} alt="Logo of restaurant" />
          </AspectRatio>
          <Typography level="h2">Restorant Nur</Typography>
        </Stack>
        <nav>
          <Link underline="none" href="/">
            Home
          </Link>
          <Link underline="none" href="/wishlist">
            Wishlist
          </Link>
          <Link underline="none" href="/promos">
            Promos
          </Link>
          <Link underline="none" href="/menu">
            Menu
          </Link>
          <Link underline="none" href="/reservation">
            Reservation
          </Link>
        </nav>
        <Button startDecorator={<FaPhone />}>Contact Us</Button>
      </Stack>
    </header>
  );
};

export default PcNav;
