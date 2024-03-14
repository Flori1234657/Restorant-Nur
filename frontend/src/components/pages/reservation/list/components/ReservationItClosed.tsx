import { Table, Typography } from '@mui/joy';

function ReservationItClosed() {
  return (
    <>
      <Typography
        sx={(theme) => ({
          fontSize: {
            xs: '1rem',
            md: '0.875rem',
            lg: '0.8rem',
            xl: '0.731rem',
          },
          fontWeight: '600',
          px: { xs: '0.5rem', md: '0.4rem', xl: '0.35rem' },
          color: theme.palette.primary[900],
          bgcolor: theme.palette.primary[500],
          borderRadius: '50%',
        })}
      >
        1
      </Typography>
      <Table
        aria-label="Card Info Table"
        sx={(theme) => ({
          '& thead th': {
            fontSize: {
              xs: '0.75rem',
              md: '0.625rem',
              lg: '0.6rem',
              xl: '0.569rem',
            },
            lineHeight: '166%',
            color: theme.palette.primary[300],
            height: 'auto',
            p: 0,
            textAlign: 'center',
            borderColor: 'transparent',
            bgcolor: 'transparent',
          },
          '& tbody td': {
            fontSize: {
              xs: '0.875rem',
              md: '0.75rem',
              lg: '0.7rem',
              xl: '0.65rem',
            },
            lineHeight: '155%',
            fontWeight: '500',
            color: theme.palette.primary[50],
            p: 0,
            height: 'auto',
            textAlign: 'center',
          },
        })}
      >
        <thead>
          <tr>
            <th>Dish.</th>
            <th>Dt.</th>
            <th>Tm.</th>
            <th>Prs.</th>
            <th>Prc.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4</td>
            <td>12/6</td>
            <td>11..</td>
            <td>4</td>
            <td>$120</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ReservationItClosed;
