import { Stack, Typography } from "@mui/joy";
import { PageSectionTxtHeaders as Props } from "../../../ts/types/headSubheadTxt.tsx";

const SectionHeaders = (text: Props) => {
  return (
    <Stack
      alignItems="center"
      sx={{
        mb: { xs: "1.25rem", md: "1.5rem", lg: "1.2rem", xl: "2.113rem" },
        gap: { lg: "0.2rem", xl: "0.163rem" },
      }}
    >
      <Typography
        textAlign="center"
        color="primary"
        level="h1"
        sx={{
          fontSize: {
            xs: "1.5rem",
            md: "1.25rem",
            lg: "1.2rem",
            xl: "1.463rem",
          },
          lineHeight: { md: "155%", lg: "150%", xl: "133%" },
        }}
        fontWeight="600"
      >
        {text.heading}
      </Typography>
      <Typography
        textAlign="center"
        sx={(theme) => ({
          color: theme.palette.primary[100],
          fontSize: { xs: "0.75rem", lg: "0.7rem", xl: "0.65rem" },
          fontWeight: { xs: "600", lg: 400 },
          lineHeight: { xs: "166%", lg: "142%", xl: "150%" },
        })}
      >
        {text.subheading}
      </Typography>
    </Stack>
  );
};

export default SectionHeaders;
