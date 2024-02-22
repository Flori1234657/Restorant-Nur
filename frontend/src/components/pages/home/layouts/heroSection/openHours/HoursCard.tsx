import { Suspense, lazy, useState } from "react";
import HoursClosedModal from "./HoursClosedModal.tsx";

const HoursModal = lazy(() => import("./HoursModal.tsx"));

const HoursCard = () => {
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
};

export default HoursCard;
