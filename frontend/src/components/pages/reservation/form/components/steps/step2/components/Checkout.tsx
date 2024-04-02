import { Stack, Typography } from '@mui/joy';
import BookDetails from '../../bookDetails/BookDetails';

function Checkout() {
  return (
    <Stack sx={{ mt: { xs: '1.25rem' } }}>
      <Typography
        sx={(theme) => ({
          fontSize: {
            xs: '0.875rem',
            md: '0.75rem',
            lg: '0.7rem',
            xl: '0.65rem',
          },
          fontWeight: '500',
          lineHeight: '142%',
          color: theme.palette.primary[50],
        })}
      >
        Checkout
      </Typography>
      <BookDetails />
    </Stack>
  );
}

export default Checkout;
