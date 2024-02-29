import { Grid } from '@mui/joy';
import mapImages from './imgsObj';
import Image from './Image';

function ImagesPhWrapper() {
  return (
    <Grid
      container
      columns={6}
      sx={{
        columnGap: '0.25rem',
        rowGap: '0.25rem',
        placeContent: 'center',
      }}
    >
      {mapImages.map((image) => (
        <Grid key={image.path} xs={image.gridColumns} width={image.width}>
          <Image path={image.path} ratio={image.ratio} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ImagesPhWrapper;
