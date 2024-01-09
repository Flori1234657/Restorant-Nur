import { AspectRatio, Badge, IconButton } from "@mui/joy";
import { FiMinus } from "react-icons/fi";

const SelectedCard = () => {
  return (
    <Badge
      badgeContent={
        <IconButton>
          <FiMinus />
        </IconButton>
      }
    >
      <AspectRatio>
        <img src="" alt="Food image" />
      </AspectRatio>
    </Badge>
  );
};

export default SelectedCard;
