import {
  Card,
  CardOverflow,
  CardContent,
  AspectRatio,
  IconButton,
  Stack,
  Typography,
  Chip,
} from '@mui/joy';
import { IoHeart as IconWish } from 'react-icons/io5';
import { FaClock, FaCheck } from 'react-icons/fa6';
import { FaUserFriends as UsersIcon } from 'react-icons/fa';
import theme from '@/customTheme';
import useBluredImage from '@/hooks/useBluredImage';

interface Props {
  cardData: {
    name: string;
    // image
    description: string;
    price: number;
    discount: number | null;
  };
  cookingTime: string;
  isAvailabe: boolean;
  promo: boolean;
  persons?: number;
}

function FoodCardPc({
  promo,
  cookingTime,
  isAvailabe,
  cardData,
  persons,
}: Props) {
  const PlaceholderImg = useBluredImage({
    src: '/src/assets/webp/cards/food-placeholder.jpg',
    hash: 'LUF5EBIp4;tR~UIpIV%LS6WBn$xZ',
    altTxt: 'Food Image',
  });

  return (
    <Card
      sx={() => ({
        bgcolor: theme.palette.secondary.black1,
        border: 'none',
        boxShadow: theme.shadow.pcFoodCard,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0.8rem',
        maxWidth: { xl: '8.412rem' },
      })}
    >
      <CardOverflow>
        <AspectRatio ratio="1.75">{PlaceholderImg}</AspectRatio>
      </CardOverflow>
      <IconButton
        color="primary"
        variant="solid"
        size="sm"
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: '0.8rem',
          color: theme.palette.primary[100],
        }}
      >
        <IconWish />
      </IconButton>
      <CardContent sx={{ gap: '0.488rem' }}>
        <Stack sx={{ gap: '0.404rem' }}>
          <Typography
            level="h1"
            color="primary"
            fontWeight={600}
            sx={{ fontSize: { xl: '0.673rem' } }}
          >
            {cardData.name || 'Failed to fetch'}
          </Typography>
          <Typography
            sx={() => ({
              fontSize: { xl: '0.538rem' },
              color: theme.palette.primary[100],
              lineHeight: '122%',
            })}
          >
            {cardData.description || 'Network error'}
          </Typography>
          <Stack direction="row" sx={{ gap: '0.269rem' }}>
            {promo ? (
              <Chip startDecorator={<UsersIcon />}>{persons} persons</Chip>
            ) : (
              <Chip
                color="primary"
                variant="solid"
                size="sm"
                sx={{ fontSize: { xl: '0.5rem' }, fontWeight: 'bold' }}
                startDecorator={<FaClock />}
              >
                {cookingTime || '-- : --'}
              </Chip>
            )}
            <Chip
              color={isAvailabe ? 'primary' : 'danger'}
              variant="solid"
              size="sm"
              sx={{ fontSize: { xl: '0.5rem' }, fontWeight: 'bold' }}
              startDecorator={<FaCheck />}
            >
              {isAvailabe ? 'Availabe' : 'Not available'}
            </Chip>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center" sx={{ gap: '0.5rem' }}>
          <Typography
            level="title-lg"
            sx={() => ({
              fontSize: { xl: '1.009rem' },
              lineHeight: '133%',
              color: theme.palette.primary[100],
            })}
          >
            ${cardData.price || ''}.00
          </Typography>
          {cardData.discount ? (
            <Typography
              level="body-lg"
              sx={() => ({
                fontSize: { xl: '0.538rem' },
                fontWeight: 700,
                color: theme.palette.success[500],
                textDecoration: 'line-through',
              })}
            >
              -{cardData.discount}%
            </Typography>
          ) : (
            ''
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

FoodCardPc.defaultProps = {
  persons: 0,
};

export default FoodCardPc;
