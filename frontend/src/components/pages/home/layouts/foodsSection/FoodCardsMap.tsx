import { Stack } from '@mui/joy';
import FoodCard from '@/components/same/cards/FoodCard';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import useFoodCardsStore from '@/components/store/foodCardsStore';

function FoodCardsMap() {
  const { vw } = useViewPortWidth();
  const foodData = useFoodCardsStore((state) => state.foodCards);

  return (
    <Stack
      sx={{
        gap: { xs: '1rem', xl: '2rem' },
        minHeight: { xs: '19.248rem', lg: '12.763rem' },
        alignItems: 'center',
        justifyContent: 'center',
      }}
      direction={vw >= 1536 ? 'row' : 'column'}
    >
      {[
        { size: '1', card: foodData[0] },
        { size: '0.9', card: foodData[1] },
        { size: '0.8', card: foodData[2] },
      ].map((element) => (
        <Stack
          alignItems="center"
          key={element.size}
          fontSize={`${element.size}rem`}
        >
          <FoodCard
            foodProps={{
              cardData: {
                description: element.card.description,
                name: element.card.name,
                price: element.card.price,
                discount: element.card?.discount,
              },
            }}
            cookingTime={element.card.cookingTime}
            isAvailabe={element.card.isAvailable}
          />
        </Stack>
      ))}
    </Stack>
  );
}

export default FoodCardsMap;
