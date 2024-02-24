import { IoIosWarning as WarningIcon } from 'react-icons/io';
import {
  HiHandThumbUp as ConfirmIcon,
  HiHandThumbDown as NoIcon,
} from 'react-icons/hi2';
import TwoOptionsModal from './TwoOptionsModal';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ConfirmBooking({ open, setOpen }: Props) {
  return (
    <TwoOptionsModal
      text="You are booking now! Are you sure?"
      btn1={{ txt: "Yes, I'm Sure", icn: <ConfirmIcon /> }}
      btn2={{ txt: 'No, I Need To Think', icn: <NoIcon /> }}
      toggleState={open}
      setOpenModal={setOpen}
      helperTxt={{
        txt: 'Note this cannot be undone!',
        icon: <WarningIcon />,
      }}
    />
  );
}

export default ConfirmBooking;
