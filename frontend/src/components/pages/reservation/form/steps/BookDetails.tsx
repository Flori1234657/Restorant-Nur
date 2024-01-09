import { Stack, Typography } from "@mui/joy";
import {
  FaUserFriends as PersonsIcon,
  FaCalendar as DateIcon,
  FaClock as ClockIcon,
} from "react-icons/fa";
import { GiMeal as DishIcon } from "react-icons/gi";
import { MdTableBar as TableIcon } from "react-icons/md";

const BookDetails = () => {
  return (
    <Stack>
      <Typography startDecorator={<PersonsIcon />}>
        Persons: <Typography>4</Typography>
      </Typography>
      <Typography startDecorator={<DateIcon />}>
        Date: <Typography>06-03-2023</Typography>
      </Typography>
      <Typography startDecorator={<ClockIcon />}>
        Time: <Typography>21 : 30</Typography>
      </Typography>
      <Typography startDecorator={<DishIcon />}>
        Dishes:
        <Stack>
          <Typography>1 grilled koce</Typography>
          <Typography>1 mix salad</Typography>
          <Typography>1 white chess</Typography>
          <Typography>1 alba-cola</Typography>
        </Stack>
      </Typography>
      <Typography startDecorator={<TableIcon />}>
        Table: <Typography>T-20</Typography>
      </Typography>
      <Stack>
        <Typography>Total:</Typography>
        <Typography>$150.00</Typography>
      </Stack>
    </Stack>
  );
};

export default BookDetails;
