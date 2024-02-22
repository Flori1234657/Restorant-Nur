import { Stack } from "@mui/joy";
import FoodCardsMap from "./FoodCardsMap.tsx";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth.tsx";
import { Suspense, lazy } from "react";

const Decoration = lazy(() => import("./MobileDecoration.tsx"));

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
        <Suspense fallback="">
          <Decoration />
        </Suspense>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default FoodCardsWrapper;
