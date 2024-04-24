import { Grid } from '@mui/joy';
import FoodCardPh from '@/components/same/cards/cardComponents/FoodCardPh';
import useMenuStore from '../../../state/menuState';
import useSelectModalStore from '@/components/pages/reservation/form/modal/modals/selectDishes/from/state/selectModal';

function CardsMap() {
  const isAtSelectMode = useMenuStore((state) => state.isAtSelectMode);
  const selectModal = useSelectModalStore();

  if (isAtSelectMode)
    // Use filter for getting only the category wanted
    return selectModal.foodCardsReference.map((food) => (
      <Grid xs={6} md={3} key={food.index}>
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
      </Grid>
    ));

  return [1, 2, 3, 4, 5, 6].map((el) => (
    <Grid xs={6} md={3} key={el}>
      <FoodCardPh haveShadow={false} />
    </Grid>
  ));
}

export default CardsMap;
