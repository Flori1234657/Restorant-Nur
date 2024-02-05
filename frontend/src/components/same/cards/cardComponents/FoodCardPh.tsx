import { AspectRatio, IconButton, Stack, Typography } from "@mui/joy";
import { IoHeart as IconWish } from "react-icons/io5";
import PlaceholderImg from "../../../../assets/webp/cards/food-placeholder.jpg";

const FoodCardPh = () => {
  return (
    <Stack
      direction="row"
      sx={(theme) => ({
        width: "16em",
        bgcolor: theme.palette.secondary.black1,
        gap: { xs: "0.75em", lg: "0.6em" },
        border: `1px solid  ${theme.palette.primary[500]}`,
        alignItems: "center",
        borderRadius: "0.5rem",
        overflow: "hidden",
      })}
      boxShadow="xs"
    >
      <Stack sx={{ position: "relative" }}>
        <AspectRatio
          ratio={1.22}
          sx={{ width: { xs: "7.625em", lg: "7.225em" } }}
        >
          <img src={PlaceholderImg} alt="Food Image" />
        </AspectRatio>
        <IconButton
          aria-label="Add to wishlist"
          variant="solid"
          color="primary"
          size="sm"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            color: "white",
          }}
        >
          <IconWish />
        </IconButton>
      </Stack>

      <Stack sx={{ mr: { xs: "0.75em", lg: "0.6em" } }}>
        <Typography
          color="primary"
          level="h1"
          sx={{ fontSize: { xs: "1em", lg: "0.9em" } }}
          fontWeight={600}
        >
          Grilled fish
        </Typography>
        <Typography
          level="body-lg"
          fontWeight="500"
          lineHeight={1.2}
          sx={(theme) => ({
            color: theme.palette.primary[100],
            fontSize: { xs: "0.75em", lg: "0.7em" },
          })}
        >
          Grilled koce fish with spice
        </Typography>
        <Stack mt="0.25em" direction="row" gap="0.5em" justifyContent="center">
          <Typography
            sx={(theme) => ({
              color: theme.palette.primary[100],
              fontSize: { xs: "1em", lg: "0.9em" },
            })}
            level="title-lg"
          >
            $15.99
          </Typography>
          <Typography
            fontWeight={600}
            level="body-lg"
            sx={(theme) => ({
              color: theme.palette.success[300],
              textDecoration: "line-through",
              fontSize: { xs: "0.75em", lg: "0.7em" },
            })}
          >
            -20%
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FoodCardPh;
