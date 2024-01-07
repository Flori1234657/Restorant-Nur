import { ReactSVG } from "react-svg";
import Illustration from "../assets/svg/illustrations/404-not-found.svg";
import Wave from "../assets/svg/waves/404-wave.svg";
import { Button, Stack, Typography } from "@mui/joy";
import { TiHome as IconHome } from "react-icons/ti";

const NotFound404 = () => {
  return (
    <Stack>
      <ReactSVG src={Illustration} />
      <Typography level="h4">This page doesn't exist!</Typography>
      <Button startDecorator={<IconHome />} href="/">
        Go To Home?
      </Button>
      <ReactSVG src={Wave} />
    </Stack>
  );
};

export default NotFound404;
