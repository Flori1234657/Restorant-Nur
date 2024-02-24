import {
  Card,
  CardOverflow,
  CardContent,
  AspectRatio,
  Stack,
  Typography,
} from '@mui/joy';

function FoodCard() {
  // Use zustand to add to selected cards for reservation page
  return (
    <Card>
      <CardOverflow>
        <AspectRatio>
          <img src="" alt="Food" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h1">Shrimp linguine</Typography>
        <Typography level="body-lg">Linguine with shrimp and spice</Typography>
        <Stack>
          <Typography level="title-lg">$15.99</Typography>
          <Typography level="body-lg">-20%</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default FoodCard;
