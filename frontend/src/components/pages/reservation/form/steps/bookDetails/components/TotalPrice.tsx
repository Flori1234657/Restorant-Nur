import { Stack, Typography } from '@mui/joy';
import theme from '@/customTheme';

const typographyStyles = {
  color: theme.palette.primary[500],
  fontSize: '0.875rem',
  lineHeight: '155%',
};

function TotalPrice() {
  return (
    <Stack
      direction="row"
      sx={{
        borderTop: `1px solid ${theme.palette.primary[500]}`,
        justifyContent: 'space-between',
      }}
    >
      <Typography sx={typographyStyles}>Total:</Typography>
      <Typography sx={typographyStyles}>$150.00</Typography>
    </Stack>
  );
}

export default TotalPrice;
