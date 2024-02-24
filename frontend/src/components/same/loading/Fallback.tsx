import { Stack } from '@mui/joy';
import Loading from './Loading';

type Props = {
  height: string;
  heightMd?: string;
  heightLg?: string;
};

function Fallback({ height, heightMd, heightLg }: Props) {
  return (
    <Stack
      sx={{
        height: { xs: height, md: heightMd, lg: heightLg },
        justifyContent: 'center',
      }}
    >
      <Loading w="3.125rem" />
    </Stack>
  );
}

Fallback.defaultProps = {
  heightMd: 'auto',
  heightLg: 'auto',
};

export default Fallback;
