import { Grid } from '@mui/joy';
import FoodCard from '../../../same/cards/FoodCard';

function ContentWrapper() {
  return (
    <Grid
      container
      columns={{ xs: 1, md: 3 }}
      sx={(theme) => ({
        bgcolor: theme.palette.secondary.black2,
        px: { xs: '2rem', md: '8.44rem', lg: '9.35rem', xl: '9.773rem' },
        pb: '7rem',
        pt: { md: '1rem' },
        rowGap: { md: '2rem ' },
        columnGap: { md: '2rem' },
        justifyContent: { md: 'center' },
      })}
    >
      {[1, 2, 3, 4].map((el) => (
        <Grid
          key={el}
          xs={1}
          fontSize={{ md: '0.8rem' }}
          p={0}
          pt={{ xs: '1rem', md: 0 }}
          sx={{ width: { md: 'auto' } }}
        >
          <FoodCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentWrapper;
