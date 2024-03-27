import { Stack } from '@mui/joy';
import CloseBtn from './components/CloseBtn';
import SelectTable from './components/SelectTable';

function TableMapActions() {
  return (
    <Stack
      sx={{
        py: '1.5rem',
        gap: '0.75rem',
        width: { xs: '13rem', md: '100%' },
      }}
    >
      <SelectTable />
      <CloseBtn />
    </Stack>
  );
}

export default TableMapActions;
