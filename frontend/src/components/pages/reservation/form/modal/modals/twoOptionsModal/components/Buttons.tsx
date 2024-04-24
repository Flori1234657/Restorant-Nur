import { Stack } from '@mui/joy';
import Button, { ButtonProps } from '../../components/Button';

export interface TwoButtonsProps {
  button1: ButtonProps;
  button2: ButtonProps;
}

function Buttons({ button1, button2 }: TwoButtonsProps) {
  return (
    <Stack
      sx={{
        gap: { xs: '0.5rem', md: '1rem' },
        px: { xs: '2rem', md: 'auto' },
        flexDirection: { md: 'row' },
      }}
    >
      <Button
        action={button1.action}
        decorator={button1.decorator}
        innerTxt={button1.innerTxt}
      />
      <Button
        action={button2.action}
        decorator={button2.decorator}
        innerTxt={button2.innerTxt}
      />
    </Stack>
  );
}

export default Buttons;
