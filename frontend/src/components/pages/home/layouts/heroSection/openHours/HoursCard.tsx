import { useState } from "react";
import HoursClosedModal from "./HoursClosedModal.tsx";
import HoursModal from "./HoursModal.tsx";

const HoursCard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <HoursClosedModal openModal={setOpenModal} />
      <HoursModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default HoursCard;
