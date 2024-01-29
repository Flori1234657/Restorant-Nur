import { Stack, Typography } from "@mui/joy";
import { PageSectionTxtHeaders as Props } from "../../../ts/types/headSubheadTxt";

const SectionHeaders = (text: Props) => {
  return (
    <Stack alignItems="center" sx={{ mb: { xs: "1.25rem", md: "1.5rem" } }}>
      <Typography
        textAlign="center"
        color="primary"
        level="h1"
        sx={{
          fontSize: { xs: "1.5rem", md: "1.25rem" },
          lineHeight: { md: "155%" },
        }}
        fontWeight="600"
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
