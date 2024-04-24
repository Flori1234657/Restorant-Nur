import { useEffect } from 'react';
import { Stack } from '@mui/joy';
import MenuCard from '@/components/same/menu/MenuCard';
import useMenuStore from '@/components/same/menu/state/menuState';

function FromMenu() {
  const menuState = useMenuStore();

  useEffect(() => {
    menuState.toggleSelectMode(true);

    return () => menuState.toggleSelectMode(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      sx={{
        overflow: { xs: 'scroll' },
        scrollbarWidth: 'none',
        maxWidth: { xs: '16rem', md: 'unset' },
        maxHeight: { xs: '21.125rem', md: 'unset' },
        mb: { xs: '1rem' },
      }}
    >
      <MenuCard />
    </Stack>
  );
}

export default FromMenu;
