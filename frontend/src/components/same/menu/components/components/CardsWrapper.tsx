import { Grid } from "@mui/joy";
import FoodCard from "./FoodCard";

const CardsWrapper = () => {
  return (
    <Grid container columns={6}>
      {[1, 2, 3, 4, 5, 6].map((el) => (
        <Grid xs={6} md={3} key={el}>
          <FoodCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsWrapper;
