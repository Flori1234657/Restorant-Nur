import { Stack } from "@mui/joy";
import CategoryMap from "./components/CategoryMap";
import { ReactSVG } from "react-svg";
import Wave from "../../../assets/svg/waves/promo-wave.svg";

const Content = () => {
  return (
    <Stack>
      <ReactSVG src={Wave} />
      <CategoryMap />
    </Stack>
  );
};

export default Content;
