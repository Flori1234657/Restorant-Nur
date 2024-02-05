import { Stack, Typography } from "@mui/joy";
import { PageSectionTxtHeaders as Props } from "../../../ts/types/headSubheadTxt";

const SectionHeaders = (text: Props) => {
  return (
    <Stack
      alignItems="center"
      sx={{
        mb: { xs: "1.25rem", md: "1.5rem", lg: "1.2rem" },
        gap: { lg: "0.2rem" },
      }}
    >
      <Typography
        textAlign="center"
        color="primary"
        level="h1"
        sx={{
          fontSize: { xs: "1.5rem", md: "1.25rem", lg: "1.2rem" },
          lineHeight: { md: "155%", lg: "150%" },
        }}
        fontWeight="600"
      >
        {text.heading}
      </Typography>
      <Typography
        textAlign="center"
        sx={(theme) => ({
          color: theme.palette.primary[100],
          fontSize: { xs: "0.75rem", lg: "0.7rem" },
          fontWeight: "600",
          lineHeight: { xs: "166%", lg: "142%" },
        })}
      >
        {text.subheading}
      </Typography>
    </Stack>
  );
};

export default SectionHeaders;
