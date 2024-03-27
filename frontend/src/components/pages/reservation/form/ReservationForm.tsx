// import { lazy, Suspense, useState } from 'react';
import { Stack, Typography } from '@mui/joy';
import Form from './components/Form';

// const BookingModalsWrapper = lazy(
//   () => import('./modals/BookingModalsWrapper')
// );

function ReservationForm() {
  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.palette.secondary.black1,
        borderRadius: '0.75rem',
        pt: '1.25rem',
        px: { md: '0.75rem' },
        pb: '2rem',
        alignItems: 'center',
        gap: '1.25rem',
      })}
    >
      <Typography
        color="primary"
        sx={{
          fontSize: {
            xs: '1.25rem',
            md: '1.125rem',
            lg: '1rem',
            xl: '0.975rem',
          },
          fontWeight: '600',
          lineHeight: '155%',
        }}
      >
        Book a table
      </Typography>
      <Form />
      {/* <Suspense fallback="Loading Component">
        {bookTable && <BookingModalsWrapper />}
      </Suspense> */}
    </Stack>
  );
}

export default ReservationForm;
