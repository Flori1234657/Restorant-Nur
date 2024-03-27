import { AspectRatio } from '@mui/joy';
import getImagePath from '@/utils/getImagePath';

function TableMapImage() {
  const imagePath = getImagePath('svg/tableModal/restaurant-map.svg');

  return (
    <AspectRatio
      ratio="1"
      sx={{
        width: { xs: '13rem', md: '10rem' },
        borderRadius: { xs: '0.5rem' },
      }}
    >
      <img src={imagePath} alt="Restaurant map" />
    </AspectRatio>
  );
}

export default TableMapImage;
