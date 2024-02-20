import { Stack } from "@mui/joy";
import PagesHeaderTxt from "../components/same/headers/PagesHeaderTxt.tsx";
import Content from "../components/pages/reservation/Content.tsx";

const Reservation = () => {
  return (
    <Stack>
      <PagesHeaderTxt
        heading="Lorem ipsum dolor sit amet consectegur."
        subheading="Lorem ipsum dolor sit amet consectetur. At odio nisi turpis feugiat sed eget quisque commodo rutrum."
      />
      <Content />
    </Stack>
  );
};

export default Reservation;
