import { AspectRatio, Stack } from '@mui/joy';
import Wave from '@/assets/svg/waves/menu-nav-wave.svg';
import CategoryMenuLinksMap from './components/CategoryMenuLinksMap';

function MenuNav() {
  return (
    <Stack
      sx={(theme) => ({
        width: '100%',
        bgcolor: theme.palette.secondary.black2,
        alignItems: 'center',
        position: 'relative',
      })}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          px: { xs: '1.25rem' },
          pt: { xs: '1.75rem', md: 0 },
          py: { md: '1rem' },
          zIndex: { md: '200' },
          gap: { xs: '1.5rem' },
        }}
      >
        <CategoryMenuLinksMap />
      </Stack>
      <AspectRatio
        ratio="8"
        sx={{
          width: { xs: '100%', md: '15rem' },
          position: 'absolute',
          left: { md: 0 },
          bottom: { xs: '-1.8rem', md: '-0.9rem' },
          zIndex: '100',
        }}
      >
        <img src={Wave} alt="Wave" />
      </AspectRatio>
    </Stack>
  );
}

export default MenuNav;
