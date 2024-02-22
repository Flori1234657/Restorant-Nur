import AspectRatio from "@mui/joy/AspectRatio";
import { getImagePath } from "../../../../../utils/getImagePath";

const PcBlob = () => {
  const blob = getImagePath(`svg/blobs/about-us-blob.svg`);

  return (
    <AspectRatio
      sx={{
        position: "absolute",
        zIndex: -1,
        top: 0,
        width: { md: "23.438rem", xl: "30rem" },
      }}
      ratio="1.15"
    >
      <img src={blob} alt="Blob shape" />
    </AspectRatio>
  );
};

export default PcBlob;
