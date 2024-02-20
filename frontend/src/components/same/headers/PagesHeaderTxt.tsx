import { Stack, Typography } from "@mui/joy";
import { PageSectionTxtHeaders as Props } from "../../../ts/types/headSubheadTxt.ts";

const PagesHeaderTxt = (text: Props) => {
  return (
    <Stack>
      <Typography>{text.heading}</Typography>
      <Typography>{text.subheading}</Typography>
    </Stack>
  );
};

export default PagesHeaderTxt;
