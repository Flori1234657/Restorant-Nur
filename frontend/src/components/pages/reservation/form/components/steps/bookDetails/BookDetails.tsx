import { List, Stack } from '@mui/joy';
import BookDetailsMap from './components/BookDetailsMap';
import BookDetailsDishesMap from './components/BookDetailsDishesMap';
import TotalPrice from './components/TotalPrice';

function BookDetails() {
  return (
    <Stack
      sx={{
        gap: '0.25rem',
      }}
    >
      <List aria-labelledby="Order details" sx={{ gap: '0.25rem' }}>
        <BookDetailsMap />
        <BookDetailsDishesMap />
      </List>
      <TotalPrice />
    </Stack>
  );
}

export default BookDetails;
