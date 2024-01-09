import { Stack } from "@mui/joy";
import FoodCard from "../../../../../same/cards/FoodCard";

const FromWishCards = () => {
  return (
    <Stack>
      {[1, 2, 3].map((el) => (
        <Stack key={el}>
          <FoodCard />
        </Stack>
      ))}
    </Stack>
  );
};

export default FromWishCards;
