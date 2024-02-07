import { AspectRatio, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import Blob from "../../../../../assets/svg/blobs/gallery-blob.svg";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth";
import { Suspense, lazy } from "react";

const ImagesPhWrapper = lazy(() => import("./ImagesPhWrapper"));
const ImagesPcWrapper = lazy(() => import("./ImagesPcWrapper"));

const Gallery = () => {
  const { vw } = useViewPortWidth();

  return (
    <Stack
      sx={{
        mt: { xs: "3.25rem", md: "8.563rem", lg: "13.7rem", xl: "18.692rem" },
      }}
      position="relative"
    >
      <Stack sx={{ mx: "2rem" }} pt="1rem" alignItems="center">
        <SectionHeaders
          heading="Gallery"
          subheading="Some images of our seafood restaurant."
        />
        <Suspense fallback="">
          {vw < 900 ? <ImagesPhWrapper /> : <ImagesPcWrapper />}
        </Suspense>
      </Stack>
      <AspectRatio
        sx={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: { xs: "-1.75rem", md: "50%" },
          transform: { md: "translate(-50%)" },
          width: { xs: "23.438rem", xl: "30rem" },
        }}
        ratio="1.15"
      >
        <img src={Blob} alt="Blob shape" />
      </AspectRatio>
    </Stack>
  );
};

export default Gallery;
