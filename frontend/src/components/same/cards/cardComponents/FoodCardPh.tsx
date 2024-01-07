import {
  Card,
  CardOverflow,
  CardContent,
  AspectRatio,
  IconButton,
  Stack,
  Typography,
} from "@mui/joy";
import { IoHeart as IconWish } from "react-icons/io5";

const FoodCardPh = () => {
  return (
    <Card>
      <CardOverflow>
        <AspectRatio>
          <img src="" alt="Food Image" />
        </AspectRatio>
      </CardOverflow>
      <IconButton>
        <IconWish />
      </IconButton>
      <CardContent>
        <Stack>
          <Typography level="h1">Shrimp linguine</Typography>
          <Typography level="body-lg">
            Linguine with shrimp and spice
          </Typography>
          <Stack>
            <Typography level="title-lg">$15.99</Typography>
            <Typography level="body-lg">-20%</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FoodCardPh;
