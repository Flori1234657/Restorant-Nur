import { AspectRatio, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders.tsx";
import Blob from "../../../../../assets/svg/blobs/reviews-blob.svg";
import useIntersectionObserver from "../../../../../hooks/useIntersectionObserver.tsx";
import { Suspense, lazy, useRef } from "react";
import Fallback from "../../../../same/loading/Fallback.tsx";

const ReviewCardsMap = lazy(() => import("./ReviewCardsMap.tsx"));

const Reviews = () => {
  const ref = useRef<HTMLImageElement | null>(null);
  const { isIntersecting } = useIntersectionObserver({ element: ref });

  return (
    <Stack
      sx={{
        mt: { xs: "4.25rem", md: "8.563rem", lg: "13.7rem", xl: "18.692rem" },
      }}
      position="relative"
      alignItems="center"
    >
      <Stack
        sx={{
          mx: { xs: "2rem", md: "8.44rem", lg: "9.35rem", xl: "9.773rem" },
        }}
      >
        <SectionHeaders
          heading="Reviews"
          subheading="What our clients say about us?"
        />

        {isIntersecting && (
          <Stack sx={{ minHeight: { xs: "16rem" } }} alignItems="center">
            <Suspense
              fallback={
                <Fallback
                  height="16.647rem"
                  heightMd="10.609rem"
                  heightLg="13.387rem"
                />
              }
            >
              <ReviewCardsMap />
            </Suspense>
          </Stack>
        )}
      </Stack>
      <AspectRatio
        ratio="0.96"
        sx={{
          width: { xs: "23.0625rem", md: "18rem" },
          position: "absolute",
          zIndex: -1,
        }}
      >
        <img src={Blob} alt="Blob shape" ref={ref} />
      </AspectRatio>
    </Stack>
  );
};

export default Reviews;
