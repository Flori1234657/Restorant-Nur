import {
  Card,
  CardOverflow,
  CardContent,
  AspectRatio,
  IconButton,
  Stack,
  Typography,
  Chip,
} from "@mui/joy";
import { IoHeart as IconWish } from "react-icons/io5";
import { FaClock, FaCheck } from "react-icons/fa6";
import { FaUserFriends as UsersIcon } from "react-icons/fa";
import PlaceholderImg from "../../../../assets/webp/cards/food-placeholder.jpg";
import theme from "../../../../customTheme";

const FoodCardPc = ({ promo }: { promo: boolean }) => {
  return (
    <Card
      sx={(theme) => ({
        bgcolor: theme.palette.secondary.black1,
        border: "none",
        boxShadow: theme.shadow.pcFoodCard,
        position: "relative",
        overflow: "hidden",
        borderRadius: "1rem",
        maxWidth: "12.125rem",
      })}
    >
      <CardOverflow>
        <AspectRatio ratio="1.74">
          <img src={PlaceholderImg} alt="Food Image" />
        </AspectRatio>
      </CardOverflow>
      <IconButton
        color="primary"
        variant="solid"
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: "1rem",
          color: theme.palette.primary[100],
        }}
      >
        <IconWish />
      </IconButton>
      <CardContent sx={{ gap: "0.5rem" }}>
        <Stack sx={{ gap: "0.5rem" }}>
          <Typography
            level="h1"
            color="primary"
            fontWeight={600}
            sx={{ fontSize: "0.97rem" }}
          >
            Shrimp linguine
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: "0.776rem",
              color: theme.palette.primary[100],
              lineHeight: "122%",
            })}
          >
            Linguine with shrimp and spice
          </Typography>
          <Stack direction="row" sx={{ gap: "0.5rem" }}>
            {promo ? (
              <Chip startDecorator={<UsersIcon />}>4 persons</Chip>
            ) : (
              <Chip
                color="primary"
                variant="solid"
                size="sm"
                startDecorator={<FaClock />}
              >
                10 Min
              </Chip>
            )}
            <Chip
              color="primary"
              variant="solid"
              size="sm"
              startDecorator={<FaCheck />}
            >
              Available
            </Chip>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center" sx={{ gap: "0.5rem" }}>
          <Typography
            level="title-lg"
            sx={(theme) => ({
              fontSize: "1.455rem",
              lineHeight: "133%",
              color: theme.palette.primary[100],
            })}
          >
            $15.99
          </Typography>
          <Typography
            level="body-lg"
            sx={(theme) => ({
              fontSize: "0.75rem",
              fontWeight: 700,
              color: theme.palette.success[500],
              textDecoration: "line-through",
            })}
          >
            -20%
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FoodCardPc;
