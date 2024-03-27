import { AspectRatio, Badge, IconButton } from '@mui/joy';
import { FiMinus } from 'react-icons/fi';

function SelectedCard() {
  return (
    <Badge
      badgeContent={
        <IconButton>
          <FiMinus />
        </IconButton>
      }
    >
      <AspectRatio>
        <img src="" alt="Food" />
      </AspectRatio>
    </Badge>
  );
}

export default SelectedCard;
