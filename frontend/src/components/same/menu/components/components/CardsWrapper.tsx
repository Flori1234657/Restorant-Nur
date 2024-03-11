import { Grid, Stack } from '@mui/joy';
import FoodCardPh from '@/components/same/cards/cardComponents/FoodCardPh';
import ScrollShadow from '@/components/same/shadow/ScrollShadow';

function CardsWrapper() {
  return (
    <Stack
      sx={{
        maxHeight: { xs: '30rem' },
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        position: 'relative',
      }}
    >
      <ScrollShadow className="--menu-component" direction="Vertical">
        <Grid
          container
          columns={6}
          sx={{ fontSize: '0.9rem', rowGap: '1rem', py: '0.5rem' }}
        >
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <Grid xs={6} md={3} key={el}>
              <FoodCardPh isMenuComponent />
            </Grid>
          ))}
        </Grid>
      </ScrollShadow>
    </Stack>
  );
}

export default CardsWrapper;
