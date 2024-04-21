import { Grid, Stack } from '@mui/joy';
import FoodCardPh from '@/components/same/cards/cardComponents/FoodCardPh';
import ScrollShadow from '@/components/same/shadow/ScrollShadow';

function CardsWrapper() {
  return (
    <Stack
      sx={{
        maxHeight: { xs: '30rem', md: '12.757rem' },
        maxWidth: { md: '25rem' },
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        position: 'relative',
      }}
    >
      <ScrollShadow className="--menu-component" direction="Vertical">
        <Grid
          container
          columns={6}
          sx={{
            fontSize: { xs: '0.9rem', md: '0.75rem' },
            rowGap: '0.5rem',
            py: '0.5rem',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <Grid xs={6} md={3} key={el}>
              <FoodCardPh haveShadow={false} />
            </Grid>
          ))}
        </Grid>
      </ScrollShadow>
    </Stack>
  );
}

export default CardsWrapper;
