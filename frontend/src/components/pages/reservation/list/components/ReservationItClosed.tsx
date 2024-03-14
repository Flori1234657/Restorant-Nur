import { Table, Typography } from '@mui/joy';

function ReservationItClosed() {
  return (
    <>
      <Typography
        sx={(theme) => ({
          fontSize: { xs: '1rem' },
          fontWeight: '600',
          px: '0.5rem',
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
            fontSize: '0.75rem',
            lineHeight: '166%',
            color: theme.palette.primary[300],
            height: 'auto',
            p: 0,
            textAlign: 'center',
            borderColor: 'transparent',
            bgcolor: 'transparent',
          },
          '& tbody td': {
            fontSize: '0.875rem',
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
