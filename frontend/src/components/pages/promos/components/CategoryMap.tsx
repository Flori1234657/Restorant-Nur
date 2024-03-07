import { Stack } from '@mui/joy';
import CardMap from './CardMap';

function CategoryMap() {
  return (
    <Stack
      sx={(theme) => ({
        width: '100%',
        position: 'absolute',
        top: { xs: '2.5rem', md: '4rem' },
        px: { xs: '2rem', md: '8.44rem', lg: '9.35rem', xl: '9.773rem' },
        pb: '7rem',
        gap: { xs: '2.5rem', md: '4rem' },
        bgcolor: theme.palette.secondary.black2,
      })}
    >
      {['Economic', 'Dinner', 'Breakfast'].map((el) => (
        <CardMap key={el} categoryName={el} />
      ))}
    </Stack>
  );
}

export default CategoryMap;
