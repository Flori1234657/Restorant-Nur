import { Stack, Typography } from '@mui/joy';
import { PageSectionTxtHeaders as Props } from '@/types/headSubheadTxt';

function PagesHeaderTxt({ heading, subheading }: Props) {
  return (
    <Stack
      sx={{
        mx: '2rem',
        mt: { xs: '7.06rem', md: '8.625rem', xl: '9.143rem' },
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
        {heading}
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
        {subheading}
      </Typography>
    </Stack>
  );
}

export default PagesHeaderTxt;
