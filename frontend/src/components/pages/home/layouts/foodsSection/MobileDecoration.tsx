import AspectRatio from "@mui/joy/AspectRatio";
import Decor from "../../../../../assets/svg/others/our-foods-ph-decor.svg";

const MobileDecoration = () => {
  return (
    <AspectRatio
      ratio="0.09"
      sx={{
        width: { xs: "2.15rem", lg: "2.05rem" },
        position: "absolute",
        top: 0,
        zIndex: -1,
      }}
    >
      <img src={Decor} alt="Svg decoration" />
    </AspectRatio>
  );
};

export default MobileDecoration;
