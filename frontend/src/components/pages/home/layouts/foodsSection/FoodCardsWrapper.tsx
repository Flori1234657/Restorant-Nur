import { AspectRatio, Stack } from "@mui/joy";
import Decor from "../../../../../assets/svg/others/our-foods-ph-decor.svg";
import FoodCardsMap from "./FoodCardsMap";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";

const FoodCardsWrapper = () => {
  const { vw } = useViewPortWidth();
  return (
    <Stack
      sx={{
        pt: { xs: "3rem", xl: 0 },
        pb: { xs: "1.57rem", xl: 0 },
      }}
      position="relative"
      alignItems="center"
    >
      <FoodCardsMap />
      {vw < 1536 ? (
        <AspectRatio
          ratio="0.09"
          sx={{
            width: { xs: "2.15rem", lg: "2.05rem" },
            position: "absolute",
            top: 0,
            zIndex: -1,
          }}
        >
          <img src={Decor} alt="Svg decoration" />
        </AspectRatio>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default FoodCardsWrapper;
