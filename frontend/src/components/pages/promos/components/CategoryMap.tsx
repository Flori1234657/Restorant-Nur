import { Stack } from "@mui/joy";
import CardMap from "./CardMap";

const CategoryMap = () => {
  return (
    <Stack>
      {["Economic", "Dinner", "Breakfast"].map((el) => (
        <CardMap categoryName={el} />
      ))}
    </Stack>
  );
};

export default CategoryMap;
