/**
 * Object for writing sx
 * objects for components
 * that share the same style
 */

import { Theme } from '@mui/joy';

const closedModalTxtStyles = (theme: Theme) => ({
  color: theme.palette.primary[100],
  fontSize: { xs: '0.75rem', lg: '0.7rem', xl: '0.65rem' },
  fontWeight: '600',
  lineHeight: { lg: '142%' },
});

export default closedModalTxtStyles;
