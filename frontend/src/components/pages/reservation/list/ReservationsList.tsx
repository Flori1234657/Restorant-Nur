import { Stack, Typography } from '@mui/joy';
import ReservationItem from './components/ReservationItem';

function ReservationsList() {
  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.palette.secondary.black1,
        borderRadius: '0.75rem',
        alignItems: 'center',
        px: '0.75rem',
        pt: '1.25rem',
        pb: '2rem',
        gap: '1.5rem',
      })}
    >
      <Stack
        sx={{
          alignItems: 'center',
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontSize: { xs: '1.25rem' },
            fontWeight: '600',
            lineHeight: '155%',
          }}
        >
          Reservations
        </Typography>
        <Typography
          sx={(theme) => ({
            fontSize: { xs: '1rem' },
            color: theme.palette.primary[100],
          })}
        >
          Click on card to view more
        </Typography>
      </Stack>
      <Stack
        sx={{
          gap: '1rem',
        }}
      >
        {[1, 2, 3].map((el) => (
          <ReservationItem key={el} />
        ))}
      </Stack>
    </Stack>
  );
}

export default ReservationsList;
