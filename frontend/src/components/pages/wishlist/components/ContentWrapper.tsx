import { Grid } from '@mui/joy';
import FoodCard from '../../../same/cards/FoodCard';

function ContentWrapper() {
  return (
    <Grid container>
      {[1, 2, 3, 4].map((el) => (
        <Grid key={el} xs={1}>
          <FoodCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentWrapper;
