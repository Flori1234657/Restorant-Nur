import { Stack } from "@mui/joy";
import ReservationsList from "./list/ReservationsList";
import ReservationForm from "./form/ReservationForm";

const Content = () => {
  return (
    <Stack>
      <ReservationsList />
      <ReservationForm />
    </Stack>
  );
};

export default Content;
