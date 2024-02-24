/**
 * Toggle which modal to return
 * based on state declared on
 * zustand and updated by other
 * components
 */

import { lazy, useState } from 'react';

const TapToSelect = lazy(() => import('./TapToSelect'));
const ConfirmBooking = lazy(() => import('./ConfirmBooking'));
const BookingFailed = lazy(() => import('./BookingFailedModal'));
const SuccessfullyBooked = lazy(() => import('./SuccessfullyBooked'));

function BookingModalsWrapper() {
  // Zustand state to return the specified modal
  const sampleZustandState = 'Confirm';

  const [open, setOpen] = useState<boolean>(true);
  // @ts-ignore  <-- only before initializing zustand_/
  if (sampleZustandState === 'SelectDishes')
    return <TapToSelect open={open} setOpen={setOpen} />;
  if (sampleZustandState === 'Confirm')
    return <ConfirmBooking open={open} setOpen={setOpen} />;
  if (sampleZustandState === 'Failed')
    return <BookingFailed open={open} setOpen={setOpen} />;
  if (sampleZustandState === 'Success')
    return <SuccessfullyBooked open={open} setOpen={setOpen} />;

  return <></>;
}

export default BookingModalsWrapper;
