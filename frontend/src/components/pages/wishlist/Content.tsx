import { Stack } from '@mui/joy';
import ActionsPanel from './components/ActionsPanel';
import ContentWrapper from './components/ContentWrapper';

function Content() {
  return (
    <Stack
      sx={{
        mt: { xs: '3.5rem' },
      }}
    >
      <ActionsPanel />
      <ContentWrapper />
    </Stack>
  );
}

export default Content;
