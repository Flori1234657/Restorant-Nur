import { AspectRatio, Button, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import Decor from "../../../../../assets/svg/others/our-foods-ph-decor.svg";
import { MdRestaurantMenu as Icon } from "react-icons/md";
import FoodCardsMap from "./FoodCardsMap";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";
import useSizeResponsive from "../../../../../hooks/useSizeResponsive";

const OurFoods = () => {
  const { vw } = useViewPortWidth();
  const { size } = useSizeResponsive();

  return (
    <Stack
      sx={{
        mt: { xs: "3.25rem", md: "8.563rem", lg: "13.7rem" },
        mx: { xs: "2rem" },
      }}
    >
      <SectionHeaders
        heading="Our food"
        subheading="100% halal food from our halal restaurant!"
      />
      <Stack sx={{ gap: { xs: "1rem", lg: "0.8rem" } }} alignItems="center">
        <Stack
          sx={{ pt: { xs: "3rem" }, pb: { xs: "1.57rem" } }}
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
              <img src={Decor} alt="" />
            </AspectRatio>
          ) : (
            ""
          )}
        </Stack>
        <Button size={size} startDecorator={<Icon />}>
          View Menu
        </Button>
      </Stack>
    </Stack>
  );
};

export default OurFoods;
