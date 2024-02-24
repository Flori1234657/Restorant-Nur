import { Button, Stack } from '@mui/joy';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { MdEmail, MdCloudSync } from 'react-icons/md';
import useSizeResponsive from '@/hooks/useSizeResponsive';

function Form() {
  const { size } = useSizeResponsive(true);

  return (
    <Stack gap="0.5rem">
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            color: theme.palette.primary[300],
            fontSize: { xl: '0.65rem' },
          })}
        >
          Email
        </FormLabel>
        <Input
          size={size}
          sx={{ boxShadow: 'none' }}
          startDecorator={<MdEmail />}
          placeholder="example@email.com"
        />
      </FormControl>
      <Button size={size} color="primary" startDecorator={<MdCloudSync />}>
        Subscribe
      </Button>
    </Stack>
  );
}

export default Form;
