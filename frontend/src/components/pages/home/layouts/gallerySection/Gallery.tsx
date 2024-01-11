import { AspectRatio, Grid, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import Image from "./Image";
import { arrOfImgObjs as mapImages } from "./imgsObj";
import Blob from "../../../../../assets/svg/blobs/gallery-blob.svg";

const Gallery = () => {
  return (
    <Stack mt="3.25rem" position="relative">
      <Stack mx="2rem" pt="1rem">
        <SectionHeaders
          heading="Gallery"
          subheading="Some images of our seafood restaurant."
        />
        <Grid container columns={6} rowGap="0.25rem" columnGap="0.25rem">
          {mapImages.map((el) => (
            <Grid key={el.path} xs={el.gridColumns} width={el.width}>
              <Image path={el.path} ratio={el.ratio} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <AspectRatio
        sx={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: "-1.75rem",
          width: "26.75rem",
        }}
        ratio="1.15"
      >
        <img src={Blob} alt="Blob shape" />{" "}
      </AspectRatio>
    </Stack>
  );
};

export default Gallery;
