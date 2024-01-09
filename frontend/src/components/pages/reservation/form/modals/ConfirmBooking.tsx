import TwoOptionsModal from "./TwoOptionsModal";
import { IoIosWarning as WarningIcon } from "react-icons/io";
import {
  HiHandThumbUp as ConfirmIcon,
  HiHandThumbDown as NoIcon,
} from "react-icons/hi2";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmBooking = (props: Props) => {
  return (
    <TwoOptionsModal
      text="You are booking now! Are you sure?"
      btn1={{ txt: "Yes, I'm Sure", icn: <ConfirmIcon /> }}
      btn2={{ txt: "No, I Need To Think", icn: <NoIcon /> }}
      toggleState={props.open}
      setOpenModal={props.setOpen}
      helperTxt={{
        txt: "Note this cannot be undone!",
        icon: <WarningIcon />,
      }}
    />
  );
};

export default ConfirmBooking;
