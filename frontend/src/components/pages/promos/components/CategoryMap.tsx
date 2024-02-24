import { Stack } from '@mui/joy';
import CardMap from './CardMap';

function CategoryMap() {
  return (
    <Stack>
      {['Economic', 'Dinner', 'Breakfast'].map((el) => (
        <CardMap categoryName={el} />
      ))}
    </Stack>
  );
}

export default CategoryMap;
