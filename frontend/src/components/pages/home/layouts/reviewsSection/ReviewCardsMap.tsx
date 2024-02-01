import { Stack } from "@mui/joy";
import { arrOfreviwes } from "./reviewsObj";
import { Suspense, lazy } from "react";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";

const ReviewCardPc = lazy(() => import("./ReviewCardPc"));
const ReviewCardPh = lazy(() => import("./ReviewCardPh"));

const ReviewCardsMap = () => {
  const { vw } = useViewPortWidth();

  return (
    <Stack
      sx={{
        gap: { xs: "0.5rem", md: "1.5rem" },
      }}
      direction={vw >= 900 ? "row" : "column"}
    >
      <Suspense fallback="">
        {arrOfreviwes.map((el) =>
          vw < 900 ? (
            <ReviewCardPh
              key={el.profileImg}
              profileImg={el.profileImg}
              review={el.review}
              order={el.order}
            />
          ) : (
            <ReviewCardPc key={el.profileImg} fontS={el.fontSize || "1rem"} />
          )
        )}
      </Suspense>
    </Stack>
  );
};

export default ReviewCardsMap;
