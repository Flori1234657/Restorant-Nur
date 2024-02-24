import {
  HiHandThumbUp as ConfirmIcon,
  HiHandThumbDown as NoIcon,
} from 'react-icons/hi2';
import TwoOptionsModal from './TwoOptionsModal';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function BookingFailedModal({ open, setOpen }: Props) {
  return (
    <TwoOptionsModal
      text="Ops! Someone else has booked before you this table!"
      btn1={{ txt: 'I Want Another Table', icn: <ConfirmIcon /> }}
      btn2={{ txt: "No Thanks I'm Going", icn: <NoIcon /> }}
      toggleState={open}
      setOpenModal={setOpen}
    />
  );
}

export default BookingFailedModal;
