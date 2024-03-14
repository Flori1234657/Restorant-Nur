import { ListItem, ListItemDecorator, Stack, Typography } from '@mui/joy';
import { GiMeal as DishIcon } from 'react-icons/gi';
import detialIconStyles from '../../../sxObj/detailStyles';
import DishesMap from './components/DishesMap';

function BookDetailsDishesMap() {
  return (
    <ListItem
      nested
      sx={{ gap: '0.5rem', p: 0, width: 'auto', minBlockSize: 'auto' }}
    >
      <Stack direction="row" alignItems="center" sx={{ gap: '0.5rem' }}>
        <ListItemDecorator sx={detialIconStyles}>
          <DishIcon />
        </ListItemDecorator>
        <Typography
          sx={(theme) => ({
            color: theme.palette.primary[100],
            fontWeight: '300',
          })}
        >
          Dishes:
        </Typography>
      </Stack>
      <DishesMap />
    </ListItem>
  );
}

export default BookDetailsDishesMap;
