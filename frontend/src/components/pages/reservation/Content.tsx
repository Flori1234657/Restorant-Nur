import { Stack } from "@mui/joy";
import ReservationsList from "./list/ReservationsList";
import ReservationForm from "./form/ReservationForm";
import { ReactSVG } from "react-svg";
import Blob from "../../../assets/svg/blobs/reservation-blob.svg";

const Content = () => {
  return (
    <Stack>
      <ReservationsList />
      <ReservationForm />
    </Stack>
  );
};

export default Content;
