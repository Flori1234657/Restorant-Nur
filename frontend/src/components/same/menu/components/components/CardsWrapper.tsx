import { Grid, Stack } from '@mui/joy';
import ScrollShadow from '@/components/same/shadow/ScrollShadow';
import CardsMap from './components/CardsMap';

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
          <CardsMap />
        </Grid>
      </ScrollShadow>
    </Stack>
  );
}

export default CardsWrapper;
