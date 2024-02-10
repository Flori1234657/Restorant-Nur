import { AspectRatio } from "@mui/joy";
import useImagePath from "../../../../../hooks/useImagePath";
import useBluredImage from "../../../../../hooks/useBluredImage";

const Image = (props: { path: string; ratio: string }) => {
  const { imagePath } = useImagePath({
    buildPath: "__",
    developmentPath: `webp/home/gallery-img-${props.path}`,
  });

  const Img = useBluredImage({
    src: imagePath,
    hash: "LUF5EBIp4;tR~UIpIV%LS6WBn$xZ",
    altTxt: "Gallery Image for restaurant",
  });

  return (
    <AspectRatio
      sx={{
        borderRadius: { xs: "0.375rem", lg: "0.5rem" },
      }}
      ratio={props.ratio}
    >
      {Img}
    </AspectRatio>
  );
};

export default Image;
