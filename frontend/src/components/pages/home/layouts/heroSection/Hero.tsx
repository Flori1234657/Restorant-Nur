import { Stack } from "@mui/joy";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth.tsx";
import Bottom from "./components/Bottom.tsx";
import Content from "./components/Content.tsx";
import heroBckImg from "./utils/getProperImage.ts";

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
