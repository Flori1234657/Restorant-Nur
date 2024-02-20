import { Stack } from "@mui/joy";
import CategoryMap from "./components/CategoryMap";
import Wave from "../../../assets/svg/waves/promo-wave.svg";

const Content = () => {
  return (
    <Stack>
      <img src={Wave} alt="wave" />
      <CategoryMap />
    </Stack>
  );
};

export default Content;
