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
    <Stack sx={{ mt: { xs: "3.25rem", md: "8.563rem" } }} mx="2rem">
      <SectionHeaders
        heading="Our food"
        subheading="100% halal food from our halal restaurant!"
      />
      <Stack gap="1rem" alignItems="center">
        <Stack
          sx={{ pt: { xs: "3rem" }, pb: { xs: "1.57rem" } }}
          position="relative"
          alignItems="center"
        >
          <FoodCardsMap />
          {vw < 1200 ? (
            <AspectRatio
              ratio="0.09"
              sx={{
                width: "2.15rem",
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
