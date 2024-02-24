import { Button, Stack, Typography } from '@mui/joy';
import { TiHome as IconHome } from 'react-icons/ti';
import Illustration from '@/assets/svg/illustrations/404-not-found.svg';
import Wave from '@/assets/svg/waves/404-wave.svg';

function NotFound404() {
  return (
    <Stack>
      <img src={Illustration} alt="" />
      <Typography level="h4">This page doesn&apost exist!</Typography>
      <Button startDecorator={<IconHome />} href="/">
        Go To Home?
      </Button>
      <img src={Wave} alt="" />
    </Stack>
  );
}

export default NotFound404;
