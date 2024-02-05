import { AspectRatio, Stack } from "@mui/joy";
import { Brand, Contact, Newsletter, MapLocation, Copyright } from "./sections";
import useViewPortWidth from "../../../hooks/useViewPortWidth";

const Footer = () => {
  const { vw } = useViewPortWidth();

  const imagePath = import.meta.env.PROD
    ? `path for build here`
    : vw < 900
    ? `/src/assets/svg/waves/footer-ph-wave.svg`
    : `/src/assets/svg/waves/footer-pc-wave.svg`;

  return (
    <footer style={{ width: "100%" }}>
      <AspectRatio ratio={vw < 900 ? "3.4" : "6"}>
        <img src={imagePath} alt="Wave shape" />
      </AspectRatio>
      <Stack
        pb="2rem"
        sx={(theme) => ({ bgcolor: theme.palette.secondary.black2 })}
      >
        <Stack
          sx={{
            mx: { xs: "2rem", md: "8.44rem", lg: "9.35rem" },
            flexDirection: { md: "row" },
            gap: { xs: "1.5rem", md: 0 },
            justifyContent: { md: "space-between" },
          }}
        >
          <Brand />
          <Contact />
          <Newsletter />
          <MapLocation />
        </Stack>
      </Stack>
      <Copyright />
    </footer>
  );
};

export default Footer;
