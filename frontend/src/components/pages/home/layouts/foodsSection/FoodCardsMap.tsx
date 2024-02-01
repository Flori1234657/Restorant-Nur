import { Stack } from "@mui/joy";
import FoodCard from "../../../../same/cards/FoodCard";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";

const FoodCardsMap = () => {
  const { vw } = useViewPortWidth();

  return (
    <Stack gap="1rem" direction={vw >= 1200 ? "row" : "column"}>
      {["1", "0.9", "0.8"].map((el) => (
        <Stack alignItems="center" key={el} fontSize={`${el}rem`}>
          <FoodCard />
        </Stack>
      ))}
    </Stack>
  );
};

export default FoodCardsMap;
