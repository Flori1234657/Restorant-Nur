import { Stack } from '@mui/joy';
import FoodCardPh from '@/components/same/cards/cardComponents/FoodCardPh';
import useSelectModalStore from '../../state/selectModal';

function CardsMap() {
  const selectModal = useSelectModalStore();

  return selectModal.foodCardsReference.map((food) => (
    <Stack key={food.index} sx={{ fontSize: { xs: '0.75rem' } }}>
      <div
        role="button"
        onClick={() => {
          if (food.isSelected)
            selectModal.removeSelectedCardReference(food.index);
          else selectModal.setSelectedCardReference(food.index);

          selectModal.toggleCardSelectedStatus(food.index, false);
        }}
        onKeyDown={() => {}}
        tabIndex={0}
      >
        <FoodCardPh haveShadow={food.isSelected} />
      </div>
    </Stack>
  ));
}

export default CardsMap;
