import {
  HiHandThumbUp as ConfirmIcon,
  HiHandThumbDown as NoIcon,
} from "react-icons/hi2";
import TwoOptionsModal from "./TwoOptionsModal";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookingFailedModal = (props: Props) => {
  return (
    <TwoOptionsModal
      text="Ops! Someone else has booked before you this table!"
      btn1={{ txt: "I Want Another Table", icn: <ConfirmIcon /> }}
      btn2={{ txt: "No Thanks I'm Going", icn: <NoIcon /> }}
      toggleState={props.open}
      setOpenModal={props.setOpen}
    />
  );
};

export default BookingFailedModal;
