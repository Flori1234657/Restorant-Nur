import { Stack, Typography } from '@mui/joy';
import Form from './Form';
import { footerHeadingStyles, footerTextInfoStyles } from '../sxObjs/textInfo';

function Newsletter() {
  return (
    <Stack gap="0.75rem" sx={{ maxWidth: { md: '8.063rem' } }}>
      <Stack>
        <Typography level="h2" sx={(theme) => footerHeadingStyles(theme)}>
          Newsletter
        </Typography>
        <Typography level="body-md" sx={(theme) => footerTextInfoStyles(theme)}>
          Get by email the latest from our restaurant!
        </Typography>
      </Stack>
      <Form />
    </Stack>
  );
}

export default Newsletter;
