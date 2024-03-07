import { Stack, Typography } from '@mui/joy';
import FoodCard from '@/components/same/cards/FoodCard';

function CardMap({ categoryName }: { categoryName: string }) {
  return (
    <Stack
      sx={{
        gap: { xs: '1.5rem', md: 0 },
      }}
    >
      <Typography
        color="primary"
        sx={{
          fontSize: { xs: '1.5rem' },
          fontWeight: { xs: '600' },
        }}
        level="h1"
      >
        {categoryName}
      </Typography>
      <Stack
        sx={{
          fontSize: { md: '0.8rem' },
          flexDirection: { md: 'row' },
          overflowX: { md: 'scroll' },
          gap: { xs: '1rem', md: 0 },
          px: { md: '1rem' },
        }}
      >
        {[1, 2, 3, 4].map((el) => (
          <Stack
            key={el}
            sx={{
              ml: { md: '1rem', lg: '2rem' },
              py: { md: '1rem' },
            }}
          >
            <FoodCard />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default CardMap;
