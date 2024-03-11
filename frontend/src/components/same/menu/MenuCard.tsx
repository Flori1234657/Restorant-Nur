import { Stack } from '@mui/joy';
import MenuNav from './components/MenuNav';
import Content from './components/Content';

function MenuCard() {
  return (
    <Stack
      sx={(theme) => ({
        mt: { xs: '3.75rem' },
        mx: { xs: '2rem' },
        pb: { xs: '1.25rem' },
        alignItems: 'center',
        overflow: 'hidden',
        border: `1px solid ${theme.palette.primary[500]}`,
        borderRadius: '1rem',
      })}
    >
      <MenuNav />
      <Content />
    </Stack>
  );
}

export default MenuCard;
