import { Stack } from "@mui/joy";
import FoodCard from "../../../../same/cards/FoodCard";

const FoodCardsMap = () => {
  return (
    <Stack gap="1rem">
      {["1", "0.9", "0.8"].map((el) => (
        <Stack alignItems="center" key={el} fontSize={`${el}rem`}>
          <FoodCard />
        </Stack>
      ))}
    </Stack>
  );
};

export default FoodCardsMap;
