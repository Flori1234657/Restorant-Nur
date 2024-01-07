import { Stack } from "@mui/joy";
import ActionsPanel from "./components/ActionsPanel";
import { ReactSVG } from "react-svg";
import Wave from "../../../assets/svg/waves/wishlist-wave.svg";
import ContentWrapper from "./components/ContentWrapper";

const Content = () => {
  return (
    <Stack>
      <ActionsPanel />
      <ReactSVG src={Wave} />
      <ContentWrapper />
    </Stack>
  );
};

export default Content;
