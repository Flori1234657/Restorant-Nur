import { Stack } from '@mui/joy';
import FormButtons from './components/FormButtons';
import Fields from './steps/Fields';

function Form() {
  return (
    <Stack
      sx={{ width: { xs: '14.5rem', md: 'auto' }, gap: { xs: '1.25rem' } }}
    >
      <Fields />
      <FormButtons />
    </Stack>
  );
}

export default Form;
