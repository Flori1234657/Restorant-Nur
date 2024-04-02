import ModalsWrapper from '../../../../modal/ModalsWrapper';
// import ConfirmBooking from '../../../../modal/modals/confirmBooking/ConfirmBooking';
import SelectDishes from '../../../../modal/modals/selectDishes/SelectDishes';

function BookModal() {
  return (
    <ModalsWrapper>
      <SelectDishes />
      {/* <ConfirmBooking /> zustand state */}
    </ModalsWrapper>
  );
}

export default BookModal;
