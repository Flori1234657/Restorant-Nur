/* eslint-disable no-nested-ternary */
import { Suspense, lazy } from 'react';
import { useFormUiStore } from '../../../state/uiState';
import AskToConfirm from './bookingState/AskToConfirm';

const Failed = lazy(() => import('./bookingState/Failed'));
const Successfull = lazy(() => import('./bookingState/Successfull'));

function ConfirmBooking() {
  const toggleBookingState = useFormUiStore(
    (state) => state.reservationModals.confirmBooking
  );

  return toggleBookingState === 'AskToConfirm' ? (
    <AskToConfirm />
  ) : (
    <Suspense fallback="">
      {toggleBookingState === 'Successfull' ? <Successfull /> : <Failed />}
    </Suspense>
  );
}

export default ConfirmBooking;
