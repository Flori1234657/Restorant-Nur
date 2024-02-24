import { IconButton, Stack, Typography } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navIt, navItActive } from '../../sxObj/phNavSx';
import { NavActiveItems } from './hooks/useToggleActiveNav';

export type NavItProps = {
  icon: React.ReactNode;
  txt: 'Promos' | 'Wishlist' | 'Home' | 'Menu' | 'Book';
  path: string;
  activeMap: NavActiveItems;
  changeActive: (
    name: 'Promos' | 'Wishlist' | 'Home' | 'Menu' | 'Book'
  ) => void;
};

function Item({ activeMap, changeActive, icon, path, txt }: NavItProps) {
  const nav = useNavigate();

  return (
    <Stack
      gap="0.25rem"
      alignItems="center"
      sx={{ mb: activeMap[txt] ? '2.25rem' : '' }}
    >
      <IconButton
        aria-label="Home page link"
        color="primary"
        variant="solid"
        sx={(theme) => (activeMap[txt] ? navItActive(theme) : navIt(theme))}
        onClick={() => {
          changeActive(txt);
          nav(path);
        }}
      >
        {icon}
      </IconButton>
      {activeMap[txt] ? (
        <Typography
          sx={(theme) => ({ color: theme.palette.primary[900] })}
          fontSize="0.75rem"
          fontWeight={700}
          lineHeight="166%"
        >
          {txt}
        </Typography>
      ) : (
        ''
      )}
    </Stack>
  );
}

export default Item;
