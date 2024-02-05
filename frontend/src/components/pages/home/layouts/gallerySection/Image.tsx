import { AspectRatio } from "@mui/joy";

const Image = (props: { path: string; ratio: string }) => {
  const imagePath = import.meta.env.PROD
    ? `path for build here`
    : `/src/assets/webp/home/gallery-img-${props.path}`;

  return (
    <AspectRatio
      sx={{
        borderRadius: { xs: "0.375rem", lg: "0.5rem" },
      }}
      ratio={props.ratio}
    >
      <img src={imagePath} alt="Gallery Image for restaurant" />
    </AspectRatio>
  );
};

export default Image;
