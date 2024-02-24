import { Table } from '@mui/joy';

function ReservationItClosed() {
  return (
    <Table aria-label="Card Info Table">
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
          <td>11:30</td>
          <td>4</td>
          <td>$120</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ReservationItClosed;
