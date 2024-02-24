import { Stack, Typography } from '@mui/joy';
import { PageSectionTxtHeaders as Props } from '@/ts/types/headSubheadTxt';

function PagesHeaderTxt({ heading, subheading }: Props) {
  return (
    <Stack>
      <Typography>{heading}</Typography>
      <Typography>{subheading}</Typography>
    </Stack>
  );
}

export default PagesHeaderTxt;
