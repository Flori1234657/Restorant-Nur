import { Stack } from "@mui/joy";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";
import Bottom from "./components/Bottom";
import Content from "./components/Content";
import heroBckImg from "./utils/getProperImage";

const Hero = () => {
  const { vw } = useViewPortWidth();

  return (
    <Stack
      sx={{
        backgroundImage: `url(${heroBckImg(vw)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Content />
      <Bottom />
    </Stack>
  );
};

export default Hero;
