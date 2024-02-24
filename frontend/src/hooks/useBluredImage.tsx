import { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

type Props = {
  src: string;
  hash: string;
  altTxt: string;
};

const useBluredImage = ({ src, hash, altTxt }: Props) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);

    img.src = src;
  }, [src]);

  if (!imageLoaded)
    return (
      <Blurhash
        hash={hash}
        width={400}
        height={400}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    );

  return <img src={src} alt={altTxt} />;
};

export default useBluredImage;
