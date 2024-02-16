import { Button, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import { MdRestaurantMenu as Icon } from "react-icons/md";
import useSizeResponsive from "../../../../../hooks/useSizeResponsive";
import useIntersectionObserver from "../../../../../hooks/useIntersectionObserver";
import { Suspense, lazy, useRef } from "react";
import Fallback from "../../../../same/loading/Fallback";

const FoodCardsWrapper = lazy(() => import("./FoodCardsWrapper"));

const OurFoods = () => {
  const element = useRef<HTMLDivElement | null>(null);
  const { isIntersecting } = useIntersectionObserver({ element });

  const { size } = useSizeResponsive(false);

  return (
    <Stack
      sx={{
        mt: { xs: "3.25rem", md: "8.563rem", lg: "13.7rem", xl: "18.692rem" },
        mx: { xs: "2rem", xl: "9.773rem" },
      }}
    >
      <SectionHeaders
        heading="Our food"
        subheading="100% halal food from our halal restaurant!"
      />
      <Stack
        sx={{ gap: { xs: "1rem", lg: "0.8rem", xl: "1.75rem" } }}
        alignItems="center"
      >
        <div ref={element}>
          {isIntersecting && (
            <Suspense
              fallback={
                <Fallback
                  height="23.818rem"
                  heightMd="23.818rem"
                  heightLg="12.763rem"
                />
              }
            >
              <FoodCardsWrapper />
            </Suspense>
          )}
        </div>
        <Button size={size} startDecorator={<Icon />}>
          View Menu
        </Button>
      </Stack>
    </Stack>
  );
};

export default OurFoods;
