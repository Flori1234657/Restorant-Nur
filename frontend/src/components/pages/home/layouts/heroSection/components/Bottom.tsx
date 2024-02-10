import { AspectRatio, Stack } from "@mui/joy";
import HomeWave from "../../../../../../assets/svg/waves/home-wave.svg";
import HoursCard from "../openHours/HoursCard";
import useViewPortWidth from "../../../../../../hooks/useViewPortWidth";

const Bottom = () => {
  const { vw } = useViewPortWidth();

  return (
    <Stack
      position="relative"
      sx={{ mt: { xs: "4.25rem", md: "9.5rem", xl: "12rem" } }}
    >
      <HoursCard />
      <AspectRatio sx={{ width: "100%" }} ratio={vw < 900 ? 2.81 : 6.82}>
        <img src={HomeWave} alt="" />
      </AspectRatio>
    </Stack>
  );
};

export default Bottom;
