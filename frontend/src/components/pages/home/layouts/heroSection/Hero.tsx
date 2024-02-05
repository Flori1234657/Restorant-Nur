import { AspectRatio, Button, Stack, Typography } from "@mui/joy";
import HomeWave from "../../../../../assets/svg/waves/home-wave.svg";
import { GiNotebook as Icon } from "react-icons/gi";
import BgImg from "../../../../../assets/webp/home/hero-image-placeholder.webp";
import HoursCard from "./openHours/HoursCard";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";
import useSizeResponsive from "../../../../../hooks/useSizeResponsive";

const Hero = () => {
  const { vw } = useViewPortWidth();
  const { size } = useSizeResponsive();

  return (
    <Stack
      sx={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        sx={{
          mx: { xs: "2rem", md: "8.44rem", lg: "9.35rem" },
          mt: { xs: "7.06rem", md: "8.625rem" },
          gap: { xs: "0.5rem", lg: "0.6rem" },
        }}
        alignItems="center"
      >
        <Typography
          level="h1"
          color="primary"
          sx={{
            maxWidth: { md: "20rem" },
            fontSize: { xs: "2.25rem", md: "1.5rem" },
            lineHeight: { xs: "133%", md: "150%", lg: "133%" },
          }}
          textAlign="center"
        >
          Welcome to our fish restaurant!
        </Typography>
        <Typography
          textAlign="center"
          sx={(theme) => ({
            color: theme.palette.primary[100],
            fontSize: { xs: "1rem", md: "0.875rem", lg: "0.8rem" },
            maxWidth: { md: "20rem" },
            lineHeight: { md: "133%" },
          })}
        >
          Lorem ipsum dolor sit amet consectetur. Ornare arcu facilisis
          scelerisque laoreet magna a odio. Nullam vitae egestas eget at in.
        </Typography>
        <Button
          fullWidth={vw < 900}
          size={size}
          sx={{
            mt: { xs: "0.5rem" },
            height: { xs: "40px", md: "auto" },
            borderRadius: "0.5rem",
          }}
          startDecorator={<Icon />}
        >
          Book A Table
        </Button>
      </Stack>
      <Stack position="relative" sx={{ mt: { xs: "4.25rem", md: "4.81rem" } }}>
        <HoursCard />
        <AspectRatio sx={{ width: "100%" }} ratio={vw < 900 ? 2.81 : 6.82}>
          <img src={HomeWave} alt="" />
        </AspectRatio>
      </Stack>
    </Stack>
  );
};

export default Hero;
