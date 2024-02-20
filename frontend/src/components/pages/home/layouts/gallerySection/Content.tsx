import { Suspense, lazy, useRef } from "react";
import useIntersectionObserver from "../../../../../hooks/useIntersectionObserver.tsx";
import { Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders.tsx";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth.tsx";
import Fallback from "../../../../same/loading/Fallback.tsx";

const ImagesPhWrapper = lazy(() => import("./ImagesPhWrapper"));
const ImagesPcWrapper = lazy(() => import("./ImagesPcWrapper"));

const Content = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isIntersecting } = useIntersectionObserver({ element: ref });

  const { vw } = useViewPortWidth();

  return (
    <Stack sx={{ mx: "2rem" }} pt="1rem" alignItems="center">
      <SectionHeaders
        heading="Gallery"
        subheading="Some images of our seafood restaurant."
      />
      <div ref={ref} aria-label="Wrapper div">
        {isIntersecting && (
          <Suspense
            fallback={
              <Fallback
                height="16.647rem"
                heightMd="10.609rem"
                heightLg="13.387rem"
              />
            }
          >
            {vw < 900 ? <ImagesPhWrapper /> : <ImagesPcWrapper />}
          </Suspense>
        )}
      </div>
    </Stack>
  );
};

export default Content;
