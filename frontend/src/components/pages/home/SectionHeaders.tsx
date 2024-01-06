import { Stack, Typography } from "@mui/joy";

type Props = {
  heading: string;
  subheading: string;
};

const SectionHeaders = (text: Props) => {
  return (
    <Stack>
      <Typography>{text.heading}</Typography>
      <Typography>{text.subheading}</Typography>
    </Stack>
  );
};

export default SectionHeaders;
