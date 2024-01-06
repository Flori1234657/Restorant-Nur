import { Grid, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import Image from "./Image";
import { arrOfImgObjs as mapImages } from "./imgsObj";
import { ReactSVG } from "react-svg";
import Blob from "../../../../../assets/svg/blobs/gallery-blob.svg";

const Gallery = () => {
  return (
    <Stack>
      <SectionHeaders
        heading="Gallery"
        subheading="Some images of our seafood restaurant."
      />
      <Grid container>
        {mapImages.map((el) => (
          <Grid key={el.path} xs={el.gridColumns}>
            <Image path={el.path} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Gallery;
