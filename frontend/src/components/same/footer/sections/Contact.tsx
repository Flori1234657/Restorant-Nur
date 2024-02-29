import { Link, Stack, Typography } from '@mui/joy';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import {
  footerHeadingStyles,
  footerTextInfoStyles,
  startDecoratorStyles,
} from './sxObjs/textInfo';

function Contact() {
  return (
    <Stack gap="0.25rem">
      <Typography level="h2" sx={(theme) => footerHeadingStyles(theme)}>
        Contact
      </Typography>
      <Stack gap="0.25rem">
        <Link
          href="tel:+355 68 839 3968"
          startDecorator={<FaPhone />}
          sx={(theme) => footerTextInfoStyles(theme)}
          slotProps={startDecoratorStyles}
        >
          +355 68 839 3968
        </Link>
        <Link
          href="tel:+355 68 839 3968"
          startDecorator={<FaPhone />}
          sx={(theme) => footerTextInfoStyles(theme)}
          slotProps={startDecoratorStyles}
        >
          +355 68 596 3254
        </Link>
        <Link
          href="mailto:floriandollani15@gmail.com"
          startDecorator={<MdEmail />}
          sx={(theme) => footerTextInfoStyles(theme)}
          slotProps={startDecoratorStyles}
        >
          restorantnur@gmail.info
        </Link>
      </Stack>
    </Stack>
  );
}

export default Contact;
