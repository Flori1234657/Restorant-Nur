import { AspectRatio, Button, Stack, Typography } from "@mui/joy";
import Illustration from "../../../../../assets/svg/illustrations/home-cta.svg";
import { GiNotebook as Icon } from "react-icons/gi";
import { ReactSVG } from "react-svg";
import Blob from "../../../../../assets/svg/blobs/cta-blob.svg";

const CtaSection = () => {
  return (
    <Stack>
      <Stack>
        <Typography>So what are you waiting for?</Typography>
        <Typography>Book your table before someone else take’s it!</Typography>
      </Stack>
      <AspectRatio objectFit="contain">
        <img src={Illustration} alt="" />
      </AspectRatio>
      <Button startDecorator={<Icon />}>Book My Table Now</Button>
    </Stack>
  );
};

export default CtaSection;
