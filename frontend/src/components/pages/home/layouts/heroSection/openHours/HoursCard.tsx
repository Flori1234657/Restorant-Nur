import { useState } from "react";
import HoursClosedModal from "./HoursClosedModal";
import HoursModal from "./HoursModal";

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
