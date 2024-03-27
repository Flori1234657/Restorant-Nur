import { AspectRatio } from '@mui/joy';
import getImagePath from '@/utils/getImagePath';

function Blob() {
  const blob = getImagePath('svg/blobs/reservation-blob.svg');

  return (
    <AspectRatio
      sx={{
        width: { xs: '26.938rem', md: '18rem' },
        position: 'absolute',
        zIndex: '-1',
        top: 0,
        left: { xs: '-50%', md: '50%' },
        transform: { md: 'translate(-50%)' },
      }}
      ratio="0.89"
    >
      <img src={blob} alt="Blob Decorator" />
    </AspectRatio>
  );
}

export default Blob;
