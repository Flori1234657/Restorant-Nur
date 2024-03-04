import { Button, Stack } from '@mui/joy';
import { GiNotebook as Icon } from 'react-icons/gi';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import useSizeResponsive from '@/hooks/useSizeResponsive';
import PagesHeaderTxt from '@/components/same/headers/PagesHeaderTxt';

function Content() {
  const { vw } = useViewPortWidth();
  const { size } = useSizeResponsive(false);

  return (
    <Stack
      sx={{
        gap: { xs: '0.5rem', lg: '0.6rem', xl: '0.488rem' },
      }}
      alignItems="center"
    >
      <PagesHeaderTxt
        heading="Welcome to our fish restaurant on front of the sea!"
        subheading="Come and enjoy your vacation in our restaurant, with food cooked from
      the hands of masterchefs!"
      />
      <Stack
        sx={{
          width: { xs: '100%', md: 'auto' },
          px: '2rem',
          mt: { xs: '0.5rem', xl: '0.325rem' },
        }}
      >
        <Button
          fullWidth={vw < 900}
          size={size}
          sx={{
            height: { xs: '40px', md: 'auto' },
            borderRadius: '0.5rem',
          }}
          startDecorator={<Icon />}
        >
          Book A Table
        </Button>
      </Stack>
    </Stack>
  );
}

export default Content;
