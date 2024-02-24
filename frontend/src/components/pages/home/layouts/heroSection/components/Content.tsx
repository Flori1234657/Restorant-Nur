import { Button, Stack, Typography } from '@mui/joy';
import { GiNotebook as Icon } from 'react-icons/gi';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import useSizeResponsive from '@/hooks/useSizeResponsive';

function Content() {
  const { vw } = useViewPortWidth();
  const { size } = useSizeResponsive(false);

  return (
    <Stack
      sx={{
        mx: '2rem',
        mt: { xs: '7.06rem', md: '8.625rem', xl: '9.143rem' },
        gap: { xs: '0.5rem', lg: '0.6rem', xl: '0.488rem' },
      }}
      alignItems="center"
    >
      <Typography
        level="h1"
        color="primary"
        sx={{
          maxWidth: { md: '24rem' },
          fontSize: { xs: '2.25rem', md: '1.5rem', xl: '1.707rem' },
          lineHeight: { xs: '133%', md: '150%', lg: '133%' },
        }}
        textAlign="center"
      >
        Welcome to our fish restaurant on front of the sea!
      </Typography>
      <Typography
        textAlign="center"
        sx={(theme) => ({
          color: theme.palette.primary[100],
          fontSize: {
            xs: '1rem',
            md: '0.875rem',
            lg: '0.8rem',
            xl: '0.732rem',
          },
          maxWidth: { md: '20rem' },
          lineHeight: { md: '133%' },
        })}
      >
        Come and enjoy your vacation in our restaurant, with food cooked from
        the hands of masterchefs!
      </Typography>
      <Button
        fullWidth={vw < 900}
        size={size}
        sx={{
          mt: { xs: '0.5rem', xl: '0.325rem' },
          height: { xs: '40px', md: 'auto' },
          borderRadius: '0.5rem',
        }}
        startDecorator={<Icon />}
      >
        Book A Table
      </Button>
    </Stack>
  );
}

export default Content;
