import { AspectRatio, Stack } from "@mui/joy";
import Blob from "../../../../../assets/svg/blobs/gallery-blob.svg";
import Content from "./Content";

const Gallery = () => {
  return (
    <Stack
      sx={{
        mt: { xs: "3.25rem", md: "8.563rem", lg: "13.7rem", xl: "18.692rem" },
      }}
      position="relative"
    >
      <Content />
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
