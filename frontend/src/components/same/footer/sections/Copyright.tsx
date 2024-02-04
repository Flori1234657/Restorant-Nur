import { Stack, Typography } from "@mui/joy";

const Copyright = () => {
  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.palette.secondary.black1,
        borderTop: `1px solid ${theme.palette.secondary.black3}`,
        pb: { xs: "4.813rem", md: 0 },
      })}
      alignItems="center"
    >
      <Typography
        fontSize="0.75rem"
        lineHeight="166%"
        sx={(theme) => ({
          color: theme.palette.primary[50],
          py: { xs: "0.31rem", md: "0.25rem" },
          fontWeight: 600,
        })}
      >
        ©Copyright Florian Dollani
      </Typography>
    </Stack>
  );
};

export default Copyright;
