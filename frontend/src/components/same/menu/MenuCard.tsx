import { Stack } from '@mui/joy';
import MenuNav from './components/MenuNav';
import Content from './components/Content';
import useMenuStore from './state/menuState';

function MenuCard() {
  const isAtSelectMode = useMenuStore((state) => state.isAtSelectMode);

  return (
    <Stack
      sx={(theme) => ({
        width: { md: '40rem' },
        alignSelf: 'center',
        mt: { xs: '3.75rem' },
        mx: { xs: '2rem' },
        pb: { xs: '1.25rem' },
        alignItems: 'center',
        overflow: { xs: isAtSelectMode ? 'scroll' : 'hidden', md: 'hidden' },
        border: { xs: `1px solid ${theme.palette.primary[500]}`, md: 'none' },
        borderRadius: '1rem',
      })}
    >
      <MenuNav />
      <Content />
    </Stack>
  );
}

export default MenuCard;
