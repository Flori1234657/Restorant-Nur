import { Grid } from '@mui/joy';
import SelectedCard from './components/SelectedCard';

const DishesMap = () => {
  return [1, 2, 3].map((el) => (
    <Grid
      xs={1}
      key={el}
      sx={{
        width: { xs: '3rem', md: '2.5rem' },
        height: { xs: '3rem', md: '2.5rem' },
      }}
    >
      <SelectedCard />
    </Grid>
  ));
};

export default DishesMap;
