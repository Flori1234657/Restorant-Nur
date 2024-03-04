import { Grid } from '@mui/joy';
import FoodCard from '../../../same/cards/FoodCard';

function ContentWrapper() {
  return (
    <Grid
      container
      columns={{ xs: 1 }}
      rowSpacing={{ xs: '1rem' }}
      sx={(theme) => ({
        bgcolor: theme.palette.secondary.black2,
        px: '2rem',
        pb: '7rem',
      })}
    >
      {[1, 2, 3, 4].map((el) => (
        <Grid key={el} xs={1}>
          <FoodCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentWrapper;
