import { Stack } from '@mui/joy';
import FoodCardPh from '@/components/same/cards/cardComponents/FoodCardPh';
import useSelectModalStore from '../../state/selectModal';

function CardsMap() {
  const selectModal = useSelectModalStore();

  return selectModal.promoCardsReference.map((promo) => (
    <Stack key={promo.index} sx={{ fontSize: { xs: '0.75rem' } }}>
      <div
        role="button"
        onClick={() => {
          if (promo.isSelected)
            selectModal.removeSelectedCardReference(promo.index);
          else selectModal.setSelectedCardReference(promo.index);

          selectModal.toggleCardSelectedStatus(promo.index, true);
        }}
        onKeyDown={() => {}}
        tabIndex={0}
      >
        <FoodCardPh haveShadow={promo.isSelected} />
      </div>
    </Stack>
  ));
}

export default CardsMap;
