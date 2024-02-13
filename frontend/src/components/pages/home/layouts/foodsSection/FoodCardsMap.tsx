import { Stack } from "@mui/joy";
import FoodCard from "../../../../same/cards/FoodCard";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";

const FoodCardsMap = () => {
  const { vw } = useViewPortWidth();

  return (
    <Stack
      sx={{
        gap: { xs: "1rem", xl: "2rem" },
        minHeight: { xs: "19.248rem", lg: "12.763rem" },
        alignItems: "center",
        justifyContent: "center",
      }}
      direction={vw >= 1536 ? "row" : "column"}
    >
      {["1", "0.9", "0.8"].map((el) => (
        <Stack alignItems="center" key={el} fontSize={`${el}rem`}>
          <FoodCard />
        </Stack>
      ))}
    </Stack>
  );
};

export default FoodCardsMap;
