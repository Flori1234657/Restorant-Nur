import { Suspense, lazy, useState } from 'react';
import HoursClosedModal from './HoursClosedModal';

const HoursModal = lazy(() => import('./HoursModal'));

function HoursCard() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <HoursClosedModal openModal={setOpenModal} isOpening={openModal} />
      {openModal && (
        <Suspense fallback="">
          <HoursModal open={openModal} setOpen={setOpenModal} />
        </Suspense>
      )}
    </>
  );
}

export default HoursCard;
