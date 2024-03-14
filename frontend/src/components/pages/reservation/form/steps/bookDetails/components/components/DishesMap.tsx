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
              fontSize: { md: '0.875rem', lg: '0.8rem', xl: '0.731rem' },
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
