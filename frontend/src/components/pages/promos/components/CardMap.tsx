import { Stack, Typography } from "@mui/joy";
import FoodCard from "../../../same/cards/FoodCard";

const CardMap = ({ categoryName }: { categoryName: string }) => {
  return (
    <Stack>
      <Typography level="h1">{categoryName}</Typography>
      <Stack>
        {[1, 2, 3, 4].map((el) => (
          <FoodCard key={el} />
        ))}
      </Stack>
    </Stack>
  );
};

export default CardMap;
