import { AspectRatio } from '@mui/joy';
import getImagePath from '@/utils/getImagePath';
import useBluredImage from '@/hooks/useBluredImage';

function Image({ path, ratio }: { path: string; ratio: string }) {
  const Img = useBluredImage({
    src: getImagePath(`webp/home/gallery-img-${path}`),
    hash: 'LUF5EBIp4;tR~UIpIV%LS6WBn$xZ',
    altTxt: 'Gallery Image for restaurant',
  });

  return (
    <AspectRatio
      sx={{
        borderRadius: { xs: '0.375rem', lg: '0.5rem' },
      }}
      ratio={ratio}
    >
      {Img}
    </AspectRatio>
  );
}

export default Image;
