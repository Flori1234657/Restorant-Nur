import { AspectRatio } from "@mui/joy";

const Image = (props: { path: string }) => {
  const imagePath = import.meta.env.PROD
    ? `path for build here`
    : `../../../../../assets/webp/home/gallery-img-${props.path}`;

  return (
    <AspectRatio objectFit="cover">
      <img src={imagePath} alt="Gallery Image for restaurant" />
    </AspectRatio>
  );
};

export default Image;
