import { AspectRatio, Button, Link, Stack, Typography } from "@mui/joy";
import Logo from "../../../../assets/logo.svg";
import { FaPhone } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

const PcNav = () => {
  const navItStyles = {
    underline: "none",
    fontSize: { md: "0.75rem", lg: "0.7rem", xl: "0.65rem" },
    fontWeight: 600,
    lineHeight: { md: 1.66, lg: 1.42 },
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
        sx={{
          mx: { md: "8.44rem", lg: "9.35rem", xl: "9.773rem" },
          py: { md: "1rem", lg: "0.825rem", xl: "0.796rem" },
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack gap="0.25rem" direction="row" alignItems="center">
          <AspectRatio
            objectFit="contain"
            ratio="1/1"
            sx={{ width: { md: "1.625rem", lg: "1.6rem", xl: "1.626rem" } }}
          >
            <img src={Logo} alt="Logo of restaurant" />
          </AspectRatio>
          <Typography
            level="h2"
            color="primary"
            sx={{
              fontSize: { md: "0.875rem", lg: "0.9rem", xl: "0.813rem" },
              lineHeight: { md: "142%", lg: "166%", xl: "155%" },
            }}
            fontWeight={600}
          >
            Restorant Nur
          </Typography>
        </Stack>
        <nav>
          <Stack sx={{ gap: { md: "1.25rem", lg: "1.4rem" } }} direction="row">
            <Link sx={navItStyles} component={RouterLink} to="/">
              Home
            </Link>
            <Link sx={navItStyles} component={RouterLink} to="/wishlist">
              Wishlist
            </Link>
            <Link sx={navItStyles} component={RouterLink} to="/promos">
              Promos
            </Link>
            <Link sx={navItStyles} component={RouterLink} to="/menu">
              Menu
            </Link>
            <Link sx={navItStyles} component={RouterLink} to="/reservation">
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
