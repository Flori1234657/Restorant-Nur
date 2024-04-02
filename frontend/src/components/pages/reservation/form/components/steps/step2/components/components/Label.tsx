import { Typography } from '@mui/joy';

function Label() {
  return (
    <Typography
      sx={(theme) => ({
        fontSize: {
          xs: '0.875rem',
          md: '0.75rem',
          lg: '0.7rem',
          xl: '0.65rem',
        },
        fontWeight: '300',
        lineHeight: '142%',
        color: theme.palette.primary[50],
      })}
    >
      Select dishes{' '}
      <Typography
        sx={{
          fontSize: {
            xs: '0.75rem',
            md: '0.625rem',
            lg: '0.6rem',
            xl: '0.569rem',
          },
        }}
      >
        &#10088;optional&#10089;
      </Typography>
    </Typography>
  );
}

export default Label;
