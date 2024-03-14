import { List, ListItem } from '@mui/joy';

function DishesMap() {
  return (
    <List aria-labelledby="Selected Dishes" sx={{ ml: '3rem' }}>
      {['1 grilled koce', '1 mix salad', '1 white chess', '1 alba-cola'].map(
        (dish) => (
          <ListItem
            key={dish}
            sx={(theme) => ({
              color: theme.palette.primary[100],
              fontWeight: '300',
              p: 0,
              width: 'auto',
              minBlockSize: 'auto',
            })}
          >
            {dish}
          </ListItem>
        )
      )}
    </List>
  );
}

export default DishesMap;
