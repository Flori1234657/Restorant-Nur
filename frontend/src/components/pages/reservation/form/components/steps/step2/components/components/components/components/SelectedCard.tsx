import { AspectRatio, Badge, IconButton } from '@mui/joy';
import { FiMinus } from 'react-icons/fi';
import getImagePath from '@/utils/getImagePath';

function SelectedCard() {
  const imagePath = getImagePath('webp/cards/food-placeholder.jpg');

  return (
    <Badge
      size="sm"
      color="danger"
      slotProps={{
        badge: {
          style: {
            padding: 0,
            boxShadow: 'none',
          },
        },
      }}
      badgeContent={
        <IconButton size="xxs" color="danger" variant="solid">
          <FiMinus />
        </IconButton>
      }
    >
      <AspectRatio
        sx={(theme) => ({
          width: { xs: '3rem', md: '2.5rem' },
          borderRadius: '0.5rem',
          boxShadow: theme.shadow.selectedDish,
        })}
        ratio="1"
      >
        <img src={imagePath} alt="Food" />
      </AspectRatio>
    </Badge>
  );
}

export default SelectedCard;
