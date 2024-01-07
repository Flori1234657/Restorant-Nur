import { Stack, Typography } from "@mui/joy";
import { PageSectionTxtHeaders as Props } from "../../../ts/types/headSubheadTxt";

const SectionHeaders = (text: Props) => {
  return (
    <Stack>
      <Typography>{text.heading}</Typography>
      <Typography>{text.subheading}</Typography>
    </Stack>
  );
};

export default SectionHeaders;
