import { Stack, Typography } from "@mui/joy";
import { PageSectionTxtHeaders as Props } from "../../../ts/types/headSubheadTxt";

const SectionHeaders = (text: Props) => {
  return (
    <Stack alignItems="center" mb="1.25rem">
      <Typography
        textAlign="center"
        color="primary"
        level="h1"
        fontSize="1.5rem"
        fontWeight="600"
        lineHeight="150%"
      >
        {text.heading}
      </Typography>
      <Typography
        textAlign="center"
        sx={(theme) => ({
          color: theme.palette.primary[100],
          fontSize: "0.75rem",
          fontWeight: "600",
          lineHeight: "166%",
        })}
      >
        {text.subheading}
      </Typography>
    </Stack>
  );
};

export default SectionHeaders;
