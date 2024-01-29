import { AspectRatio, Grid, Stack } from "@mui/joy";
import SectionHeaders from "../../SectionHeaders";
import Image from "./Image";
import { arrOfImgObjs as mapImages } from "./imgsObj";
import Blob from "../../../../../assets/svg/blobs/gallery-blob.svg";

const Gallery = () => {
  return (
    <Stack mt="3.25rem" position="relative">
      <Stack
        sx={{ mx: { xs: "2rem", md: "8.44rem" } }}
        pt="1rem"
        alignItems="center"
      >
        <SectionHeaders
          heading="Gallery"
          subheading="Some images of our seafood restaurant."
        />
        <Grid
          container
          columns={6}
          sx={{
            maxWidth: "25.875rem",
            columnGap: { xs: "0.25rem", md: "auto" },
            rowGap: { xs: "0.25rem", md: "auto" },
            placeContent: "center",
          }}
        >
          {mapImages.map((el) => (
            <Grid
              key={el.path}
              xs={el.gridColumns}
              sx={{
                width: { xs: el.width, md: el.pcWidth },
              }}
              width={el.width}
            >
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
