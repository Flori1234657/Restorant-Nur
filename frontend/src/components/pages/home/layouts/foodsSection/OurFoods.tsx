import { Button, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import { ReactSVG } from "react-svg";
import Decor from "../../../../../assets/svg/others/our-foods-ph-decor.svg";
import { MdRestaurantMenu as Icon } from "react-icons/md";
import FoodCardsMap from "./FoodCardsMap";

const OurFoods = () => {
  return (
    <Stack>
      <Stack>
        <SectionHeaders
          heading="Our food"
          subheading="100% halal food from our halal restaurant!"
        />
        <Stack>
          <Stack>
            <FoodCardsMap />
            <ReactSVG src={Decor} />
          </Stack>
          <Button startDecorator={<Icon />}>View Menu</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurFoods;
