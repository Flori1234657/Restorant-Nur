import { AspectRatio, Button, Link, Stack, Typography } from "@mui/joy";
import Logo from "../../../../assets/logo.svg";
import { FaPhone } from "react-icons/fa6";

const PcNav = () => {
  const navItStyles = {
    underline: "none",
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.66,
    textDecoration: "none",
    color: "#FFEBCE",
  };

  return (
    <header
      style={{
        width: "100%",
        position: "fixed",
        borderBottom: "1px solid #FFEBCE",
        zIndex: "1100",
        backdropFilter: "blur(50px)",
      }}
    >
      <Stack
        py="1rem"
        mx="8.44rem"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack gap="0.25rem" direction="row" alignItems="center">
          <AspectRatio
            objectFit="contain"
            ratio="1/1"
            sx={{ width: "1.625rem" }}
          >
            <img src={Logo} alt="Logo of restaurant" />
          </AspectRatio>
          <Typography
            level="h2"
            color="primary"
            fontSize="0.875rem"
            lineHeight="142%"
            fontWeight={600}
          >
            Restorant Nur
          </Typography>
        </Stack>
        <nav>
          <Stack gap="1.25rem" direction="row">
            <Link sx={navItStyles} href="/">
              Home
            </Link>
            <Link sx={navItStyles} href="/wishlist">
              Wishlist
            </Link>
            <Link sx={navItStyles} href="/promos">
              Promos
            </Link>
            <Link sx={navItStyles} href="/menu">
              Menu
            </Link>
            <Link sx={navItStyles} href="/reservation">
              Reservation
            </Link>
          </Stack>
        </nav>
        <Button size="xs" startDecorator={<FaPhone />}>
          Contact Us
        </Button>
      </Stack>
    </header>
  );
};

export default PcNav;
