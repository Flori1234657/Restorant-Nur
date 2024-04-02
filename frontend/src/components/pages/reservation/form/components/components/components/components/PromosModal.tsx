import SelectModal from '../../../../modal/modals/selectDishes/from/SelectModal';
import FromPromos from '../../../../modal/modals/selectDishes/from/promos/FromPromos';

function PromosModal() {
  return <SelectModal selectDishFrom={<FromPromos />} />;
}

export default PromosModal;
