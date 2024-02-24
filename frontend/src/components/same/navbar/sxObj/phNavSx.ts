/**
 * Object for writing sx
 * objects for components
 * that share the same style
 */

import { Theme } from '@mui/joy';

export const navIt = (theme: Theme) => {
  return {
    fontSize: '1.75rem',
    borderRadius: '50%',
    ':hover': {
      background: theme.palette.primary[900],
      color: theme.palette.primary[500],
      width: '2.5rem',
      height: '2.5rem',
      fontSize: '1.25rem',
      boxShadow: theme.shadow.navItMobile,
    },
  };
};
export const navItActive = (theme: Theme) => {
  return {
    borderRadius: '50%',
    background: theme.palette.primary[900],
    color: theme.palette.primary[500],
    width: '2.5rem',
    height: '2.5rem',
    fontSize: '1.25rem',
    boxShadow: theme.shadow.navItMobile,
  };
};
