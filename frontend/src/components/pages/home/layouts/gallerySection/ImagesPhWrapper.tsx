import { Grid } from "@mui/joy";
import { arrOfImgObjs as mapImages } from "./imgsObj";
import Image from "./Image";

const ImagesPhWrapper = () => {
  return (
    <Grid
      container
      columns={6}
      sx={{
        columnGap: "0.25rem",
        rowGap: "0.25rem",
        placeContent: "center",
      }}
    >
      {mapImages.map((el) => (
        <Grid key={el.path} xs={el.gridColumns} width={el.width}>
          <Image path={el.path} ratio={el.ratio} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImagesPhWrapper;
